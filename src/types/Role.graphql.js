export default `
# src/graphql/types/Role.graphql.js

type Role implements ServicesEntity & ServicesNavigableEntity & ServicesStatable @shareable {
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

input RoleInput @shareable {
  roleID: ID
  uniqRef: String!
  slug: String!
  authorID: ID!
  roleName: String
  description: String
  permissions: String
  state: ObjectStatus
}

type RoleResponse implements FaillibleResponse @shareable {
  data: [Role!]
  errors: [MutationError!]
}

extend type Query @shareable {
  role(roleID: ID!): RoleResponse
  roles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): RoleResponse
}

type Mutation @shareable {
  createRole(input: RoleInput!): RoleResponse!
  updateRole(roleID: ID!, input: RoleInput!): RoleResponse!
  deleteRole(roleID: ID!): MutationResponse!
}

type Subscription @shareable {
  roleAdded: Role!
  roleUpdated: Role!
  roleDeleted: Role!
}
`;
