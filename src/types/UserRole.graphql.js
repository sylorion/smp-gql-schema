export default /* GraphQL */ `
# src/graphql/types/UserRole.graphql.js

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

input CreateUserRoleInput {
  legend: String!
  
  userID: ID!
  roleID: ID!
  state: ObjectStatus
}

input UpdateUserRoleInput {
  legend: String
  
  userID: ID
  roleID: ID
  state: ObjectStatus
}

extend type Query {
  userRole(userRoleID: ID!): UserRole!
  userRoles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserRole!]!
  userRoleBySlug(Slug: String!): UserRole!
  userRolesByIDs(userRoleIDs: [ID!]!): [UserRole!]!
  userRolesBySlugs(slugs: [String!]!): [UserRole!]!
  userRoleByUniqRef(UniqRef: String!): UserRole!
}

type Mutation {
  createUserRole(input: CreateUserRoleInput!): UserRole!
  updateUserRole(userRoleID: ID!, input: UpdateUserRoleInput!): UserRole!
  deleteUserRole(userRoleID: ID!): Boolean!
}


`;
