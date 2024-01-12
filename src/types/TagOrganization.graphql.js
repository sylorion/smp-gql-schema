export default `
# src/graphql/types/TagOrganization.graphql.js

type TagOrganization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  tagOrganizationID: ID!
  tagID: ID
  uniqRef: String
  slug: String
  organizationID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input TagOrganizationInput {
  tagOrganizationID: ID
  tagID: ID
  organizationID: ID
  state: ObjectStatus
}

extend type Query {
  tagOrganization(tagOrganizationID: ID!): TagOrganization
  tagOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [TagOrganization!]!
}

type Mutation {
  createTagOrganization(input: TagOrganizationInput!): TagOrganization!
  updateTagOrganization(tagOrganizationID: ID!, input: TagOrganizationInput!): TagOrganization!
  deleteTagOrganization(tagOrganizationID: ID!): MutationResponse!
}

type Subscription {
  tagOrganizationAdded: TagOrganization!
  tagOrganizationUpdated: TagOrganization!
  tagOrganizationDeleted: TagOrganization!
}
`;
