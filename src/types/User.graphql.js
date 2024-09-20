export default /* GraphQL */ `
# src/graphql/types/User.graphql.js

type User implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
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
  loginDuration: Int
  rsaPublicKey: String
  profile: Profile
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateUserInput {
  username: String
  email: String!
  password: String!
  plan: String
  userKind: UserType
  twoFactorEnabled: Boolean
  rsaPublicKey: String
  state: ObjectStatus
}

input UpdateUserInput {
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
  users(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [User!]!
  userBySlug(Slug: String!): User!
  userByUsername(Username: String!): User!
  userByUniqRef(UniqRef: String!): User!
  userByEmail(Email: String!): User! 
  usersByIDs(userIDs: [ID!]!): [User!]! # This is a list of users
  usersBySlugs(slugs: [String!]!): [User!]! # This is a list of users

}

type Mutation { 
  createUser(input: CreateUserInput!): User!
  updateUser(userID: ID!, input: UpdateUserInput!): User!
  deleteUser(userID: ID!): MutationResponse!
}


`;
