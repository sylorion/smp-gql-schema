

export default `
# src/graphql/types/User.graphql.js

type User implements ServicesEntity & ServicesNavigableEntity & ServicesStatable  {
  userID: ID!
  uniqRef: String
  slug: String
  username: String
  email: String
  plan: String
  profileID: ID 
  userKind: UserType
  lastLogin: DateTime
  twoFactorEnabled: Boolean
  loginDuration: Int # durée en seconde de lq validité d'un token
  rsaPublicKey: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

type UserToken {
  userTokenID: ID
  userID: ID 
  token: String
  expiresIn: Int
  platform: String
  applicationID: ID 
  createdAt: DateTime
}

extend type User {
  userToken: UserToken #Last token
  userToken(utID: ID!): UserToken!
  userTokens (
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserToken!]
}

input UserInput {
  userID: ID
  username: String
  email: String
  password: String
  plan: String
  profileID: Int
  userKind: UserType
  twoFactorEnabled: Boolean
  rsaPublicKey: String
  state: ObjectStatus
}

extend type Query {
  user(userID: ID!): User!
  userByIDs(ids: [ID!]!): [User!]!
  userByUsername(username: String!): User!
  userByEmail(email: String!): User!
  usersByState(
    state: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [User!]!
  usersByUsernames(
    usernames: [String!]!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [User!]!
  usersByEmails(
    emails: [String!]!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [User!]!
  users(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [User!]!
}

type Mutation { 
  createUser(input: UserInput!): User
  updateUser(userID: ID!, input: UserInput!): User!
  deleteUser(userID: ID!): MutationResponse!
}

type Subscription {
  userListing: User!
  userDetails: User!
  userAdded: User!
  userUpdated: User!
  userDeleted: User!
  userTokenAdded: UserToken!
  userTokenDeleted: UserToken!
  userTokenRevoked: UserToken!
}
`;
