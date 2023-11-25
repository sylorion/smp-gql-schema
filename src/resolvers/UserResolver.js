// src/graphql/resolvers/UserResolvers.js
import DataLoader from 'dataloader';
import { Sequelize, DataTypes, Op, Model } from 'sequelize' ;
import { PubSub }                          from 'graphql-subscriptions' ;
import { v4 as uuidv4 }                      from 'uuid' ;
import { modelMedia, modelUserToken, modelProfile, 
  modelUser, modelApplication, modelPlace } from 'smp-core-schema'

import { slug, uuid }                      from '../../utils/entityBuilder.js';
import { generateUserToken, hashKeyWithArgon, verifyKeyWithArgon } from '../../utils/authentication.js';
import { cache }     from '../../configs/cache.js';
import pkgargon2 from 'argon2';
import { Graph } from 'redis';
import { trace } from '@opentelemetry/api'; 

const { argon2 } = pkgargon2;

const pubsub = new PubSub();
const getAsync = cache.getAsync ;
const setAsync = cache.setAsync ;
import {
  buildWhereClause,
  buildOrderClause,
  buildPaginationClause,
  handleError,
  navigateEntityList,
  addingLoggingContext
} from '../../utils/dataloader.js' ;


const userLoader = new DataLoader(keys => batchUsers(keys));
const profileLoader = new DataLoader(keys => batchProfiles(keys));

// batchUsers pourrait récupérer des utilisateurs de la base de données en utilisant une seule requête SQL.
async function batchUsers(userIDs, params, context) {
  const span = trace.getTracer('default').startSpan('batchUsers');
  context.logger.debug(`Chargement des utilisateurs: ${userIDs}`);
  const User = modelUser(context.db)
  const users = await User.findAll({
    where: {
      userID: userIDs
    }
  });
  const userMap = new Map(users.map(user => [user.userID, user]));
  const userOrdered = userIDs.map(userID => userMap.get(userID));
  span.setStatus({ code: SpanStatusCode.OK })
  span.end();
  return userOrdered
}

// De même pour les profils
async function batchProfiles(profileIDs) {
  const span = trace.getTracer('default').startSpan('batchProfiles');
  // Implémentation similaire à batchUsers
  const Profile = modelProfile(context.db)
  span.setStatus({ code: SpanStatusCode.OK })
  span.end();
}

// const loaders = {
//   userLoader,
//   profileLoader
// }

async function createUser(input, context) {
  let errors = [];
  try {
    // Hachez le mot de passe avant de l'enregistrer dans la base de données
    const hashedPassword = await hashKeyWithArgon(context, input.password); // Hache du mot de passe utilisateur
    let profile;

    const profilUniqID = uuid();
    if (input.profile){
      console.log(input.profile);
      profile = {
        uniqRef: profilUniqID,
        slug: slug(input.username + " " + input.profile.firstName + " " + input.profile.lastName ), // For convenience let preserve this equal to uniqRef for now
        firstName: input.profile.firstName,
        lastName: input.profile.lastName,
        dateOfBirth: input.profile.dateOfBirth,
        gender: input.profile.gender,
        nationality: input.profile.nationality,
        phoneNumber: input.profile.phoneNumber,
        locationID: input.profile.locationID,
        idCardNumber: input.profile.idCardNumber,
        passportNumber: input.profile.passportNumber,
        socialSecurityNumber: input.profile.socialSecurityNumber,
        state: input.profile.state,
      };
    } else {
      profile = {
        uniqRef: profilUniqID,
        slug: profilUniqID, // For convenience let preserve this equal to uniqRef for now
        state: input.profile.state,
      };
    }
    const Profile = modelProfile(context.db)
    const mProfile = await Profile.create(profile, {
      logging: (msg) => context.logger.info(msg)
    }) ;
    const userUniqID = uuidv4();
    if (mProfile) {
      pubsub.publish('PROFILE_ADDED', { profileAdded: mProfile });
      context.logger.info("Profile created " + mProfile);
    } else {
      errors = [errors, new Error("Impossible de creer un profile")];
    }
    // Créez un nouvel utilisateur en utilisant le modèle Sequelize
    const User = modelUser(context.db)
    const newUser = await User.create(addingLoggingContext({
      uniqRef: userUniqID,
      slug: userUniqID, // For convenience let preserve this equal to uniqRef for now
      username: input.username,
      email: input.email,
      profileID: mProfile.profileID,
      passwordHash: hashedPassword,
      plan: input.plan,
      state: input.state ?? mProfile.state,
      // Ajoutez d'autres champs de modèle ici
    }, context));
    if (newUser) {
      context.logger.info("New User created " + newUser);
      newUser.profile = mProfile;
    }
    pubsub.publish('USER_ADDED', { userAdded: newUser });
    return {user: newUser, errors: errors.flat()};
  } catch (error) {
    errors = [errors, error];
    console.error(errors);
    return { errors: errors.flat()};
  }
};

async function loginUser(context, password, user) {
  // 1. verify that we has the good given password
  context.logger.debug("Password: " + password);
  const verif = await verifyKeyWithArgon(context, password, user.passwordHash)

  if (!verif) {
    throw new Error('Mot de passe incorrect');
  }
  // 2. gnerate a new token cause passwordHash are equals
  // TODO: Before doing that, should
  const expiresIn = user.loginDuration ; // Convertir de minutes en secondes
  const tokenHash = await generateUserToken(context, user, expiresIn);
  context.logger.info("Create tokenHash: " + tokenHash);
  // Recuperer la plateform
  // Erengistrer le token en historique
  const UserToken = modelUserToken(context.db)
  const uToken = await UserToken.create(addingLoggingContext({userID: user.userID, token:tokenHash,
    platform: "UNKNWN PLATEFORME", applicationID: 1, expiresIn: expiresIn
  }, context));
  pubsub.publish('USER_TOKEN_ADDED', { userTokenAdded: uToken });
  try {
    // Stocker le token dans Redis avec une expiration correspondant à celle du token
    setAsync(tokenHash, JSON.stringify(user), 'EX', expiresIn).then((val) => {
      context.logger.info('Value ' + tokenHash + ' set successfully (' + val + ")");
    }).catch((err) => {
      context.logger.info('Value ' + tokenHash + ' set successfully (' + ret + ")");
    })
  } catch (err) { 
    context.logger.error('Error setting key in cache (' + tokenHash + '): ' + err);
  }
  // Update previous token newTokenGeneratedAt to today
  return uToken;
}


/**
 * Load medias owned by the given user, using GraphQL `medias` resolver
 * @param {User} user - The actual user triggering this call
 * @param {Any} args - The given parameter from the query client
 * @param {GraphQLContextType} context - the graphQL context of the current query
 * @param {Any} info - additionnal informations of the current query
 * @return {[Media]} - The media listing owned by the current user
 */
async function userMedias (user, { pagination = {}, sort = {}, filter = undefined }, context, info) {
  async function findMedias(options) {
    context.logger.info("Looking for media attached to a given user")
    const Media = modelMedia(context.db)
    return await Media.findAll(options)
  }
  const filters = filter ?? [{ field: "authorID", operator: '=', value: user.userID }]
  const retRes = navigateEntityList(context, findMedias, pagination, sort, filters)
  return retRes.then(({ data, errors }) => {
    return data
  }).catch((error) => {
    return handleError(context, 'User::Error fetching applications:' + error);
  })
}


/**
 * Load applications owned (field: ownedID} or created (field: authorID) by the given user, using GraphQL `User`.`applications` resolver
 * @param {User} user - The actual user triggering this call
 * @param {Any} args - The given parameter from the query client
 * @param {GraphQLContextType} context - the graphQL context of the current query
 * @param {Any} info - additionnal informations of the current query
 * @return {[Application]} - The media listing owned by the current user
 */
async function userApplications(user, { pagination = {}, sort = {}, filter = undefined }, context, info) {
  async function findApplications(options) {
    context.logger.info("Looking for applications attached to a given user")
    const Application = modelApplication(context.db)
    return await Application.findAll(options)
  }
  // By default load owned applications
  const filters = filter ?? [{ field: "developerID", operator: '=', value: user.userID }]
  const retRes = navigateEntityList(context, findApplications, pagination, sort, filters)
  return retRes.then(({ data, errors }) => {
    return data
  }).catch((error) => {
    return handleError(context, 'User::Error fetching applications:' + error);
  })
}

/**
 * Load users using GraphQL `User`.`users` resolver
 * @param {Graph} graphQL - The actual user triggering this call
 * @param {Any} args - The given parameter from the query client
 * @param {GraphQLContextType} context - the graphQL context of the current query
 * @param {Any} info - additionnal informations of the current query
 * @return {[Application]} - The media listing owned by the current user
 */
async function users(_, { pagination = {}, sort = {}, filter = undefined }, context, info) {
  async function findUsers(options) {
    context.logger.info("Looking for users")
    const User = modelUser(context.db)
    return await User.findAll({
      ...options, ...{
        include: {
          model: Profile,
          as: "profile",
          include: [{model: Place, as: "place"}]
        }
    }})
  }
  const filters = filter ?? []
  const retRes = navigateEntityList(context, findUsers, pagination, sort, filters)
  return retRes.then((ret) => {
    return ret
  }).catch((error) => {
    return handleError(context, 'Query::Error fetching users: ' + error);
  })
}

/**
 * Load profile owned by the given user, using GraphQL `User`.`profile` resolver
 * @param {User} user - The actual user triggering this call
 * @param {Any} args - The given parameter from the query client
 * @param {GraphQLContextType} context - the graphQL context of the current query
 * @param {Any} info - additionnal informations of the current query
 * @return {Profile} - The profile owned by the current user
 */
async function userProfile(user, args, context, info) {
  try {
    const Profile = modelProfile(context.db)
    const profile = await Profile.findByPk(user.profileID, addingLoggingContext({}, context));
    if (profile) {
      return profile
    } else {
      throw new Error('user::profile Error fetching user\'s profile : ' + user.profileID + " No data found", 'profileID');
    }
  } catch (error) {
    throw new Error('user::profile:: Error fetching user\'s profile:' + error);
  }

}
const UserResolvers = {
  User: {
    medias: userMedias,
    applications: userApplications,
    //   roles: async (user, { pagination = {}, sort = {}, filter = [] }, context, info) => {
    //     return user.getRoles({
    //       offset,
    //       limit,
    //       order: [[order, orderDirection]],
    //     });
    //   },
    // },
    // places: (user, { offset = 0, limit = 10, order = 'createdAt', orderDirection = 'DESC' }, context, info) => {
    //   return user.getPlaces({
    //     offset,
    //     limit,
    //     order: [[order, orderDirection]],
    //   });
    // },
    profile: userProfile,
  },
  // End User resolvers scope
  Query: {
    user: async (_, { userID }, context, info) => {
      try {
        const User = modelUser(context.db)
        const user = await User.findByPk(userID, {
          logging: (msg) => context.logger.info(msg) });
        if (user) {
          return { data: [user], errors: [] };
        } else {
          return handleError(context, 'user::Error fetching user id: ' + userID + " No data found", 'userID');
        }

      } catch (error) {
        return handleError(context, 'User::Error fetching user:' + error);
      }
    },
    users: users,
  },
  Mutation: {
    signup: async (_, { input }, context, info) => {
      // 1. valider le format email, et voir l'email si possible
      if (!input.email || input.email.length < 3) {
        return handleError(context, 'Email de l’utilisateur invalide ou est requis.');
        // throw new UserInputError('Email de l’utilisateur est requis.');
      }
      // 2. Vérifiez si l'utilisateur existe déjà avec la même adresse e-mail et username
      const User = modelUser(context.db)
      const existingUser = await User.findOne({ where: { [Op.or]: [{ email: input.email }, { userID: input.userID ?? 0 }, { username: input.username ?? ""}] },
          logging: (msg) => context.logger.info(msg)});
      if (existingUser) {
        // 2.1 Cesser la creation et indiquer l'erreur si utilisateur avec meme email ou pseudo existant
        const retError = handleError(context, 'Un utilisateur avec cette adresse e-mail ou pseudo existe déjà');
        // 2.2 pour debug on revoi l'utilisateur existe WARNING: delete on PRODUCTION
        if (context.appConfig.verboseLevel <= 1) {
          // Associer l'utilisateur trouvé dans la reponse (peut aider dans le developpement du front end en lancant le back end en mode silly ou debug)
          retError.data = [existingUser];
        } 
        return retError;
      }
      // Dans un premier temps et version
      // Quand on s'inscrit on est connecté
      const {user:usr , errors: errors} =  await createUser(input, context);
      if (!usr) {
        usr.profile.destroy({
          logging: (msg) => context.logger.info(msg)
        });
        return handleError(context, "Erreur lors de la création de l'utilisateur ----- " + errors);
      } else {
        context.logger.info("User login after creation" + usr);
        const token = loginUser(context, context.email, usr);
        return { data: [usr], errors: null };
      }
    },
    // updateUser(userID: ID!, input: UserInput!): UserResponse
    // deleteUser(userID: ID!): MutationResponse
    login: async (_, { email, password }, context) => {
      console.log("LOGIN Call"); 
      try {
        // 1. look for the actual email user
        const User = modelUser(context.db)
        const user = await User.findOne({ where: { email },
          logging: (msg) => context.logger.info(msg)
          });
        if (!user) {
          // throws the error
          throw new Error('Not found user');
        }
        // 2. try to create new token for the user
        const token = await loginUser(context, password, user);
        user.userToken = token;
        return { data: [user] };
      } catch (error) {
        return handleError(context, " " + error);
      }
    },
  },
  
  Subscription: {
    userAdded: {
      subscribe: () => pubsub.asyncIterator(['USER_ADDED']),
    },
    userUpdated: {
      subscribe: () => pubsub.asyncIterator(['USER_UPDATED'])
    },
    userDeleted: {
      subscribe: () => pubsub.asyncIterator(['USER_DELETED'])
    },
    userTokenAdded: {
      subscribe: () => pubsub.asyncIterator(['USER_TOKEN_ADDED'])
    },
    userTokenDeleted: {
      subscribe: () => pubsub.asyncIterator(['USER_TOKEN_DELETED'])
    },
    userTokenRevoked: {
      subscribe: () => pubsub.asyncIterator(['USER_TOKEN_REVOKED'])
    }
  }
}
export default UserResolvers;