export default `
# src/graphql/types/Media.graphql.js

type Media implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  mediaID: ID!
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

extend type Query {
  media(mediaID: ID!): Media
  medias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Media!]!
}

type Mutation {
  createMedia(input: MediaInput!): Media!
  updateMedia(mediaID: ID!, input: MediaInput!): Media!
  deleteMedia(mediaID: ID!): MutationResponse!
}

type Subscription {
  mediaAdded: Media!
  mediaUpdated: Media!
  mediaDeleted: Media!
}
`;
