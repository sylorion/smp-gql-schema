export default `
# src/graphql/types/UserToken.graphql

type UserToken {
  userTokenID: ID!
  userID: ID!
  applicationID: ID
  platform: String
  token: String!
  expiresIn: Int!
  createdAt: DateTime!
  newTokenGeneratedAt: DateTime
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input UserTokenInput {
  userID: ID!
  applicationID: ID
  platform: String
  token: String!
  expiresIn: Int!
  newTokenGeneratedAt: DateTime
}

extend type Query {
  userToken(userTokenID: ID!): UserToken
  userTokens: [UserToken!]!
}

type Mutation {
  createUserToken(input: UserTokenInput!): UserToken!
  updateUserToken(userTokenID: ID!, input: UserTokenInput!): UserToken!
  deleteUserToken(userTokenID: ID!): Boolean!
}

extend type Subscription {
  userTokenListing: UserToken!
  userTokenDetails: UserToken!
  userTokenAdded: UserToken!
  userTokenUpdated: UserToken!
  userTokenDeleted: UserToken!
}
`