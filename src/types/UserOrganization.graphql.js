export default `
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

input UserOrganizationInput {
  userOrganizationID: ID
  authorID: ID
  legend: String
  userID: ID
  roleID: ID
  organizationID: ID
  state: ObjectStatus
}

type UserOrganizationResponse {
  data: [UserOrganization!]
  errors: [MutationError!]
}

extend type Query {
  userOrganization(userOrganizationID: ID!): UserOrganizationResponse
  userOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): UserOrganizationResponse
}

type Mutation {
  createUserOrganization(input: UserOrganizationInput!): UserOrganizationResponse!
  updateUserOrganization(userOrganizationID: ID!, input: UserOrganizationInput!): UserOrganizationResponse!
  deleteUserOrganization(userOrganizationID: ID!): MutationResponse!
}

type Subscription {
  userOrganizationAdded: UserOrganization!
  userOrganizationUpdated: UserOrganization!
  userOrganizationDeleted: UserOrganization!
}
`;
