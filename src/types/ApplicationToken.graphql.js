export default /* GraphQL */ `

# src/graphql/types/ApplicationToken.graphql.js

type ApplicationToken {
  applicationTokenID: ID!
  applicationID: ID!
  key: String!
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
  uniqRef: String
  slug: String
  title: String
  description: String
  officialName: String
  developerID: ID
  authKey: String
  plan: String
  appConfiguration: JSON
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
  deleteApplicationToken(applicationTokenID: ID!): MutationResponse!
}


`;
