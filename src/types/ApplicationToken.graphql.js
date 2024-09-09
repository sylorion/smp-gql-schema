export default `

# src/graphql/types/ApplicationToken.graphql.js

type ApplicationToken {
  applicationTokenID: ID!
  applicationID: ID!
  key: String!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateApplicationTokenInput {
  applicationID: ID!
  key: String!
  isActive: Boolean!
}

input UpdateApplicationTokenInput {
  applicationTokenID: ID!
  isActive: Boolean
}

type MutationResponse {
  success: Boolean!
  message: String
  applicationToken: ApplicationToken
}

extend type Query {
  applicationToken(applicationTokenID: ID!): ApplicationToken
  applicationTokens: [ApplicationToken!]!
}

type Mutation {
  createApplicationToken(input: CreateApplicationTokenInput!): ApplicationToken!
  updateApplicationToken(applicationTokenID: ID!, input: UpdateApplicationTokenInput!): ApplicationToken!
  deleteApplicationToken(applicationTokenID: ID!): MutationResponse!
}

extend type Subscription {
  applicationTokenListing: ApplicationToken!
  applicationTokenDetails: ApplicationToken!
  applicationTokenAdded: ApplicationToken!
  applicationTokenUpdated: ApplicationToken!
  applicationTokenDeleted: ApplicationToken!
}
`;
