export default /* GraphQL */ `
# src/graphql/types/UserToken.graphql.js

type UserToken {
  userTokenID: ID!
  userID: ID!
  applicationID: ID
  platform: String
  token: String!
  expiresIn: Int!
  createdAt: DateTime!
  newTokenGeneratedAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateUserTokenInput {
  userID: ID!
  applicationID: ID
  platform: String
  token: String!
  expiresIn: Int!
  newTokenGeneratedAt: DateTime
}

input UpdateUserTokenInput {
  applicationID: ID
  platform: String
  token: String
  expiresIn: Int
  newTokenGeneratedAt: DateTime
}

extend type Query {
  userToken(userTokenID: ID!): UserToken
  userTokens(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserToken!]!
  userTokenByToken(token: String!): UserToken
  userTokensByUserIDs(userIDs: [ID!]!): [UserToken!]!
  userTokensByApplicationIDs(applicationIDs: [ID!]!): [UserToken!]!
  userTokensByPlatforms(platforms: [String!]!): [UserToken!]!
}

type Mutation {
  createUserToken(input: CreateUserTokenInput!): UserToken!
  updateUserToken(userTokenID: ID!, input: UpdateUserTokenInput!): UserToken!
  deleteUserToken(userTokenID: ID!): Boolean!
}


`;
