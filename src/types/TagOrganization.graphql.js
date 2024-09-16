export default /* GraphQL */ `
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

input CreateTagOrganizationInput {
  tagID: ID!
  organizationID: ID!
  state: ObjectStatus
}

input UpdateTagOrganizationInput {
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
  createTagOrganization(input: CreateTagOrganizationInput!): TagOrganization!
  updateTagOrganization(tagOrganizationID: ID!, input: UpdateTagOrganizationInput!): TagOrganization!
  deleteTagOrganization(tagOrganizationID: ID!): MutationResponse!
}

extend type Subscription {
  tagOrganizationAdded: TagOrganization!
  tagOrganizationUpdated: TagOrganization!
  tagOrganizationDeleted: TagOrganization!
}
`;
