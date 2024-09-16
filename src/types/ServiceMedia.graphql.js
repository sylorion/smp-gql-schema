export default /* GraphQL */ `
# src/graphql/types/ServiceMedia.graphql.js

type ServiceMedia implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  serviceMediaID: ID!
  uniqRef: String
  slug: String
  authorID: ID!
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
  authorID: ID!
  mediaID: ID!
  serviceID: ID!
  legend: String
  listingPosition: Int
  state: ObjectStatus
}

input UpdateServiceMediaInput {
  authorID: ID!
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
}

type Mutation {
  createServiceMedia(input: CreateServiceMediaInput!): ServiceMedia!
  updateServiceMedia(serviceMediaID: ID!, input: UpdateServiceMediaInput!): ServiceMedia!
  deleteServiceMedia(serviceMediaID: ID!): MutationResponse!
}

extend type Subscription {
  serviceMediaAdded: ServiceMedia!
  serviceMediaUpdated: ServiceMedia!
  serviceMediaDeleted: ServiceMedia!
}
`;
