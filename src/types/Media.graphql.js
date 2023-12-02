export default `
# src/graphql/types/Media.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
type Media implements ServicesEntity & ServicesNavigableEntity & ServicesStatable @shareable {
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

extend type User @shareable {
    medias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Media!]
}

input MediaInput @shareable {
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

type MediaResponse implements FaillibleResponse @shareable {
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

type Mutation @shareable {
  createMedia(input: MediaInput!): MediaResponse!
  updateMedia(mediaID: ID!, input: MediaInput!): MediaResponse!
  deleteMedia(mediaID: ID!): MutationResponse!
}

type Subscription @shareable {
  mediaAdded: Media!
  mediaUpdated: Media!
  mediaDeleted: Media!
}
`;
