export default `
# src/graphql/types/UserRole.graphql.j
type UserRole implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  userRoleID: ID!
  uniqRef: String
  slug: String
  legend: String
  authorID: ID
  userID: ID
  roleID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input UserRoleInput {
  userRoleID: ID
  legend: String
  authorID: ID
  userID: ID
  roleID: ID
  state: ObjectStatus
}

type UserRoleResponse {
  data: [UserRole!]
  errors: [MutationError!]
}

extend type Query {
  userRole(userRoleID: ID!): UserRoleResponse
  userRoles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): UserRoleResponse
}

type Mutation {
  createUserRole(input: UserRoleInput!): UserRoleResponse!
  updateUserRole(userRoleID: ID!, input: UserRoleInput!): UserRoleResponse!
  deleteUserRole(userRoleID: ID!): MutationResponse!
}

type Subscription {
  userRoleAdded: UserRole!
  userRoleUpdated: UserRole!
  userRoleDeleted: UserRole!
}
`;
