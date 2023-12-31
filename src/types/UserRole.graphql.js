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
  userRole(userRoleID: ID!): UserRole!
  userRoleByID(userRoleID: ID!): UserRole
  userRoleByUUID(uuid: String!): UserRole!
  userRoleBySlug(slug: String!): UserRole!
  userRolesByIDs(ids: [ID!]!): [UserRole!]!
  userRolesByState(
    state: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [UserRole!]!
  userRolesByName(
    name: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [UserRole!]!
  userRolesByAuthor(
    authorID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [UserRole!]!
  userRolesByUser(
    authorID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [UserRole!]!
  userRolesByRole(
    authorID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Role!]!
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
  userRoleDetails: UserRole!
  userRoleAdded: UserRole!
  userRoleUpdated: UserRole!
  userRoleDeleted: UserRole!
}
`;
