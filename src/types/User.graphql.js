export default `
# src/graphql/types/User.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])


type User implements ServicesEntity & ServicesNavigableEntity & ServicesStatable @shareable  {
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

type UserToken @shareable  {
  userTokenID: ID
  userID: ID 
  token: String
  expiresIn: Int
  platform: String
  applicationID: ID 
  createdAt: DateTime
}

extend type User {
  userToken: UserToken! #Last token
  userTolens(
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

type UserResponse @shareable {
  data: [User!]
  errors: [MutationError!]
}

extend type Query @shareable {
  user(userID: ID!): UserResponse
  users(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): UserResponse
}

type Mutation @shareable { 
  updateUser(userID: ID!, input: UserInput!): UserResponse!
  deleteUser(userID: ID!): MutationResponse!
}

type Subscription {
  userAdded: User!
  userUpdated: User!
  userDeleted: User!
  userTokenAdded: UserToken!
  userTokenDeleted: UserToken!
  userTokenRevoked: UserToken!
}
`;
