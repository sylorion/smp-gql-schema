export default `
# src/graphql/types/Media.graphql.js
scalar File
scalar DateTime

type Media implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  mediaID: ID!
  uniqRef: String
  slug: String
  author: User
  authorID: ID!
  mediaType: MediaType!
  legend: String
  summary: String
  originalName: String
  finalName: String
  url: String
  size: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

extend type User {
    medias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Media!]
}

input MediaInput {
  mediaID: ID
  uniqRef: String
  slug: String
  authorID: ID!
  mediaType: MediaType
  legend: String
  summary: String
  originalName: String
  finalName: String
  url: String
  size: String
  state: ObjectStatus
}

type MediaResponse implements FallibleResponse {
  data: [Media!]
  errors: [MutationError!]
}

extend type Query {
  media(mediaID: ID!): MediaResponse
  medias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): MediaResponse
}

type Mutation {
  createMedia(input: MediaInput!): MediaResponse!
  updateMedia(mediaID: ID!, input: MediaInput!): MediaResponse!
  deleteMedia(mediaID: ID!): MutationResponse!
}

type Subscription {
  mediaAdded: Media!
  mediaUpdated: Media!
  mediaDeleted: Media!
}
`;
