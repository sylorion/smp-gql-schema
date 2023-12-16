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

extend type Query {
  userRole(userRoleID: ID!): UserRole
  userRoles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserRole!]!
}

type Mutation {
  createUserRole(input: UserRoleInput!): UserRole!
  updateUserRole(userRoleID: ID!, input: UserRoleInput!): UserRole!
  deleteUserRole(userRoleID: ID!): MutationResponse!
}

type Subscription {
  userRoleListing: UserRole!
  userRoleAdded: UserRole!
  userRoleUpdated: UserRole!
  userRoleDeleted: UserRole!
}
`;
