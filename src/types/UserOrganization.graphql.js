export default /* GraphQL */ `
# src/graphql/types/UserOrganization.graphql.js

type UserOrganization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  userOrganizationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  legend: String
  userID: ID
  roleID: ID
  organizationID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateUserOrganizationInput {
  
  legend: String
  userID: ID!
  roleID: ID!
  organizationID: ID!
  state: ObjectStatus
}

input UpdateUserOrganizationInput {
  
  legend: String
  userID: ID
  roleID: ID
  organizationID: ID
  state: ObjectStatus
}

extend type Query {
  userOrganization(userOrganizationID: ID!): UserOrganization
  userOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserOrganization!]!
  userOrganizationBySlug(slug: String!): UserOrganization
  userOrganizationsByIDs(userOrganizationIDs: [ID!]!,
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]): [UserOrganization!]!
  userOrganizationsBySlugs(slugs: [String!]!,
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]): [UserOrganization!]!
    userOrganizationByUniqRefs(uniqRefs: [String!]!,
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]): UserOrganization
    userOrganizationByUniqRef(uniqRef: String!): UserOrganization
}

type Mutation {
  createUserOrganization(input: CreateUserOrganizationInput!): UserOrganization!
  updateUserOrganization(userOrganizationID: ID!, input: UpdateUserOrganizationInput!): UserOrganization!
  deleteUserOrganization(userOrganizationID: ID!): MutationResponse!
}


`;
