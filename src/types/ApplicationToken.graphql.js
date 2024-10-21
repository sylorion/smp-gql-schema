export default /* GraphQL */ `

# src/graphql/types/ApplicationToken.graphql.js

type ApplicationToken {
  applicationTokenID: ID!
  applicationID: ID
  usedApplicationID: ID
  platform: String
  token: String!
  slug: String
  uniqRef: String
  isActive: Boolean!
  createdAt: DateTime! 
  updatedAt: DateTime
  deletedAt: DateTime
}

type ApplicationAccessTokenRefreshResponse {
  accessToken: String
  expiresIn: Int
  message: String
  errors: [MutationError!]
}

type ApplicationDetails {
  applicationID: ID!
  appID: String!
  uniqRef: String
  slug: String
  title: String 
  officialName: String
  developerID: ID
  authKey: String!
  description: String
  name: String
  email: String
  logo: String
  url: String
  plan: String
  isOfficialApp: Boolean
  appConfiguration: String 
  authorID: Int
  state: ObjectStatus
  createdAt: DateTime!
  updatedAt: DateTime 
}

type ApplicationLoginResponse {
  accessToken: String!
  refreshToken: String!
  accessValidityDuration: Int!
  refreshValidityDuration: Int!
  application: ApplicationDetails
  message: String
  errors: [MutationError!]
}

input UpdateApplicationTokenInput {
  isActive: Boolean
}

extend type Query {
  applicationToken(applicationTokenID: ID!): ApplicationToken
  applicationTokens: [ApplicationToken!]!,
  applicationTokenBySlug(Slug: String!): ApplicationToken,
  applicationTokensByIDs(applicationTokenIDs: [ID!]!): [ApplicationToken!]!,
  applicationTokensBySlugs(slugs: [String!]!): [ApplicationToken!]!
  applicationTokenByUniqRef(UniqRef: String!): ApplicationToken!
}

type Mutation {
  createApplicationToken(applicationID: ID, applicationKey: String!): ApplicationLoginResponse!
  refreshApplicationAccessToken(refreshToken: String!): ApplicationAccessTokenRefreshResponse
  applicationSignIn(applicationID: ID, applicationKey: String!): ApplicationLoginResponse!
  updateApplicationToken(applicationTokenID: ID!, input: UpdateApplicationTokenInput!): ApplicationToken!
  deleteApplicationToken(applicationTokenID: ID!): Boolean!
}


`;
