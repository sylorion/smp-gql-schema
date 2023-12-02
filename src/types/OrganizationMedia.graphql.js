export default `
# src/graphql/types/OrganizationMedia.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
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

type OrganizationMediaResponse implements FaillibleResponse {
  data: [OrganizationMedia!]
  errors: [MutationError!]
}

extend type Query {
  organizationMedia(organizationMediaID: ID!): OrganizationMediaResponse
  organizationMedias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): OrganizationMediaResponse
}

type Mutation {
  createOrganizationMedia(input: OrganizationMediaInput!): OrganizationMediaResponse!
  updateOrganizationMedia(organizationMediaID: ID!, input: OrganizationMediaInput!): OrganizationMediaResponse!
  deleteOrganizationMedia(organizationMediaID: ID!): MutationResponse!
}

type Subscription {
  organizationMediaAdded: OrganizationMedia!
  organizationMediaUpdated: OrganizationMedia!
  organizationMediaDeleted: OrganizationMedia!
}
`;
