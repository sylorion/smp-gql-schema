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

input CreateApplicationTokenInput {
  applicationID: ID!
  key: String!
  isActive: Boolean!
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
  createApplicationToken(input: CreateApplicationTokenInput!): ApplicationToken!
  updateApplicationToken(applicationTokenID: ID!, input: UpdateApplicationTokenInput!): ApplicationToken!
  deleteApplicationToken(applicationTokenID: ID!): MutationResponse!
}


`;
