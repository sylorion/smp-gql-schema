export default `

#src/graphql/types/ApplicationToken.graphql

type ApplicationToken {
  applicationTokenID: ID!
  applicationID: ID!
  key: String!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime
  deletedAt: DateTime
}

input ApplicationTokenInput {
  applicationID: ID!
  key: String!
  isActive: Boolean!
}

extend type Query {
  applicationToken(applicationTokenID: ID!): ApplicationToken
  applicationTokens: [ApplicationToken!]!
}

type Mutation {
  createApplicationToken(input: ApplicationTokenInput!): ApplicationToken!
  updateApplicationToken(applicationTokenID: ID!, input: ApplicationTokenInput!): ApplicationToken!
  deleteApplicationToken(applicationTokenID: ID!): Boolean!
}

extend type Subscription {
  applicationTokenListing: ApplicationToken!
  applicationTokenDetails: ApplicationToken!
  applicationTokenAdded: ApplicationToken!
  applicationTokenUpdated: ApplicationToken!
  applicationTokenDeleted: ApplicationToken!
}
`