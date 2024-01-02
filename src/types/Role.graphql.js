export default `
# src/graphql/types/Role.graphql.js

type Role implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  roleID: ID!
  uniqRef: String!
  slug: String!
  authorID: ID!
  roleName: String
  description: String
  permissions: JSON
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input RoleInput {
  roleID: ID 
  authorID: ID
  roleName: String
  description: String
  permissions: String
  state: ObjectStatus
}

extend type Query {
  role(roleID: ID!): Role
  roleByID(roleID: ID!): Role
  roleByUUID(uuid: String!): Role!
  roleBySlug(slug: String!): Role! 
  rolesByIDs(ids: [ID!]!): [Role!]!
  rolesByState(
    state: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Role!]!
  rolesByName(
    name: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Role!]!
  rolesByAuthor(
    authorID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Role!]!
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
  roleListing: Role!
  roleDetails: Role!
  roleAdded: Role!
  roleUpdated: Role!
  roleDeleted: Role!
}
`;
