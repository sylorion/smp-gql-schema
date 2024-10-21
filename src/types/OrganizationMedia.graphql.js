export default /* GraphQL */ `
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

input CreateOrganizationMediaInput {
  
  mediaID: ID!
  organizationID: ID!
  legend: String
  listingPosition: Int
  state: ObjectStatus
}

input UpdateOrganizationMediaInput {
  
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
  organizationMediaBySlug(Slug: String!): OrganizationMedia
  organizationMediasByIDs(organizationMediaIDs: [ID!]!): [OrganizationMedia!]!
  organizationMediasBySlugs(slugs: [String!]!): [OrganizationMedia!]!
  organizationMediaByUniqRef(UniqRef: String!): OrganizationMedia
}

type Mutation {
  createOrganizationMedia(input: CreateOrganizationMediaInput!): OrganizationMedia!
  updateOrganizationMedia(organizationMediaID: ID!, input: UpdateOrganizationMediaInput!): OrganizationMedia!
  deleteOrganizationMedia(organizationMediaID: ID!): MutationResponse!
}


`;
