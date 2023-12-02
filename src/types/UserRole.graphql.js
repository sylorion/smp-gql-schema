export default `
# src/graphql/types/UserRole.graphql.js

type UserRole implements ServicesEntity & ServicesNavigableEntity & ServicesStatable @shareable {
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

input UserRoleInput @shareable {
  userRoleID: ID
  legend: String
  authorID: ID
  userID: ID
  roleID: ID
  state: ObjectStatus
}

type UserRoleResponse implements FaillibleResponse @shareable {
  data: [UserRole!]
  errors: [MutationError!]
}

extend type Query @shareable {
  userRole(userRoleID: ID!): UserRoleResponse
  userRoles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): UserRoleResponse
}

type Mutation @shareable {
  createUserRole(input: UserRoleInput!): UserRoleResponse!
  updateUserRole(userRoleID: ID!, input: UserRoleInput!): UserRoleResponse!
  deleteUserRole(userRoleID: ID!): MutationResponse!
}

type Subscription @shareable {
  userRoleAdded: UserRole!
  userRoleUpdated: UserRole!
  userRoleDeleted: UserRole!
}
`;
