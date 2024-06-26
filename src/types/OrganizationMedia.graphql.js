export default `
# src/graphql/types/OrganizationMedia.graphql.js

type OrganizationMedia implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  organizationMediaID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  mediaID: ID
  organizationID: ID
  legend: String
  listingPosition: Int
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input OrganizationMediaInput {
  organizationMediaID: ID
  authorID: ID
  mediaID: ID
  organizationID: ID
  legend: String
  listingPosition: Int
  state: ObjectStatus
}

extend type Query {
  organizationMedia(organizationMediaID: ID!): OrganizationMedia
  organizationMedias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [OrganizationMedia!]!
}

type Mutation {
  createOrganizationMedia(input: OrganizationMediaInput!): OrganizationMedia!
  updateOrganizationMedia(organizationMediaID: ID!, input: OrganizationMediaInput!): OrganizationMedia!
  deleteOrganizationMedia(organizationMediaID: ID!): MutationResponse!
}

type Subscription {
  organizationMediaAdded: OrganizationMedia!
  organizationMediaUpdated: OrganizationMedia!
  organizationMediaDeleted: OrganizationMedia!
}
`;
