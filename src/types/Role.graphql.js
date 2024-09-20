export default /* GraphQL */ `
# src/graphql/types/Role.graphql.js

type Role implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  roleID: ID!
  uniqRef: String!
  slug: String!
  
  roleName: String
  description: String
  permissions: JSON
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateRoleInput {
  
  roleName: String
  description: String
  permissions: JSON
  state: ObjectStatus
}

input UpdateRoleInput {
  authorID: ID
  roleName: String
  description: String
  permissions: JSON
  state: ObjectStatus
}

extend type Query {
  role(roleID: ID!): Role
  roles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Role!]!
}

type Mutation {
  createRole(input: CreateRoleInput!): Role!
  updateRole(roleID: ID!, input: UpdateRoleInput!): Role!
  deleteRole(roleID: ID!): MutationResponse!
}


`;
