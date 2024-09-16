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
  authorID: ID!
  legend: String
  userID: ID!
  roleID: ID!
  organizationID: ID!
  state: ObjectStatus
}

input UpdateUserOrganizationInput {
  authorID: ID!
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
}

type Mutation {
  createUserOrganization(input: CreateUserOrganizationInput!): UserOrganization!
  updateUserOrganization(userOrganizationID: ID!, input: UpdateUserOrganizationInput!): UserOrganization!
  deleteUserOrganization(userOrganizationID: ID!): MutationResponse!
}

extend type Subscription {
  userOrganizationAdded: UserOrganization!
  userOrganizationUpdated: UserOrganization!
  userOrganizationDeleted: UserOrganization!
}
`;
