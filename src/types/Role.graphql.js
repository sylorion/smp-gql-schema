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

type RoleResponse implements FaillibleResponse {
  data: [Role!]
  errors: [MutationError!]
}

extend type Query {
  role(roleID: ID!): RoleResponse
  roles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): RoleResponse
}

type Mutation {
  createRole(input: RoleInput!): RoleResponse!
  updateRole(roleID: ID!, input: RoleInput!): RoleResponse!
  deleteRole(roleID: ID!): MutationResponse!
}

type Subscription {
  roleAdded: Role!
  roleUpdated: Role!
  roleDeleted: Role!
}
`;
