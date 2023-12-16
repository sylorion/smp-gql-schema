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

extend type Query {
  userOrganization(userOrganizationID: ID!): UserOrganization
  userOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserOrganization!]!
}

type Mutation {
  createUserOrganization(input: UserOrganizationInput!): UserOrganization!
  updateUserOrganization(userOrganizationID: ID!, input: UserOrganizationInput!): UserOrganization!
  deleteUserOrganization(userOrganizationID: ID!): MutationResponse!
}

type Subscription {
  userOrganizationLinsting: UserOrganization!
  userOrganizationAdded: UserOrganization!
  userOrganizationUpdated: UserOrganization!
  userOrganizationDeleted: UserOrganization!
}
`;
