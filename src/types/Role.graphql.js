export default `
# src/graphql/types/Role.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

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

type RoleResponse  @shareable {
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
