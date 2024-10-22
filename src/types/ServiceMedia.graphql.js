export default /* GraphQL */ `
# src/graphql/types/ServiceMedia.graphql.js

type ServiceMedia implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  serviceMediaID: ID!
  uniqRef: String
  slug: String
  
  mediaID: ID!
  serviceID: ID!
  legend: String
  listingPosition: Int
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateServiceMediaInput {
  
  mediaID: ID!
  serviceID: ID!
  legend: String
  listingPosition: Int
  state: ObjectStatus
}

input UpdateServiceMediaInput {
  
  mediaID: ID
  serviceID: ID
  legend: String
  listingPosition: Int
  state: ObjectStatus
}

extend type Query {
  serviceMedia(serviceMediaID: ID!): ServiceMedia
  serviceMedias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [ServiceMedia!]!
  serviceMediaBySlug(Slug: String!): ServiceMedia
  serviceMediasByIDs(serviceMediaIDs: [ID!]!): [ServiceMedia!]!
  serviceMediasBySlugs(slugs: [String!]!): [ServiceMedia!]!
  serviceMediaByUniqRef(uniqRef: String!): ServiceMedia
}

type Mutation {
  createServiceMedia(input: CreateServiceMediaInput!): ServiceMedia!
  updateServiceMedia(serviceMediaID: ID!, input: UpdateServiceMediaInput!): ServiceMedia!
  deleteServiceMedia(serviceMediaID: ID!): MutationResponse!
}


`;
