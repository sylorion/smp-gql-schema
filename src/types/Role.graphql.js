export default `
# src/graphql/types/Role.graphql.js

type Role implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  roleID: ID!
  uniqRef: String!
  slug: String!
  authorID: ID!
  roleName: String
  description: String
  permissions: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input RoleInput {
  roleID: ID
  uniqRef: String!
  slug: String!
  authorID: ID!
  roleName: String
  description: String
  permissions: String
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
  createRole(input: RoleInput!): Role!
  updateRole(roleID: ID!, input: RoleInput!): Role!
  deleteRole(roleID: ID!): MutationResponse!
}

type Subscription {
  roleAdded: Role!
  roleUpdated: Role!
  roleDeleted: Role!
}
`;
