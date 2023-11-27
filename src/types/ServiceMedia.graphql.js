export default `
# src/graphql/types/ServiceMedia.graphql.js
type ServiceMedia implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  serviceMediaID: ID!
  uniqRef: String
  slug: String
  author: User
  media: Media
  service: Service
  legend: String
  listingPosition: Int
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input ServiceMediaInput {
  serviceMediaID: ID
  authorID: ID!
  mediaID: ID!
  serviceID: ID!
  legend: String
  listingPosition: Int
  state: ObjectStatus
}

type ServiceMediaResponse implements FaillibleResponse {
  data: [ServiceMedia!]
  errors: [MutationError!]
}

extend type Query {
  serviceMedia(serviceMediaID: ID!): ServiceMediaResponse
  serviceMedias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ServiceMediaResponse
}

type Mutation {
  createServiceMedia(input: ServiceMediaInput!): ServiceMediaResponse!
  updateServiceMedia(serviceMediaID: ID!, input: ServiceMediaInput!): ServiceMediaResponse!
  deleteServiceMedia(serviceMediaID: ID!): MutationResponse!
}

type Subscription {
  serviceMediaAdded: ServiceMedia!
  serviceMediaUpdated: ServiceMedia!
  serviceMediaDeleted: ServiceMedia!
}
`;
