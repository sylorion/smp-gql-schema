export default /* GraphQL */ `
# src/graphql/types/Media.graphql.js

type Media @shareable {
  mediaID: ID!
  authorID: ID
  mediaType: String
  originalName: String
  finalName: String
  url: String
  entityID: ID
  entityName: String
  size: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateMediaInput {
  mediaType: MediaType
  authorID: ID
  legend: String
  summary: String
  originalName: String
  finalName: String
  entityID: ID
  metadata: JSON
  entityName: String
  url: String
  size: String
  state: ObjectStatus
}

input UpdateMediaInput {
  # mediaType: MediaType
  legend: String
  summary: String
  originalName: String
  finalName: String
  metadata: JSON
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
  mediaBySlug(Slug: String!): Media
  mediasByIDs(mediaIDs: [ID!]!): [Media!]!
  mediasBySlugs(slugs: [String!]!): [Media!]!
  mediaByUniqRef(uniqRef: String!): Media
}

type Mutation {
  createMedia(input: CreateMediaInput!): Media!
  updateMedia(mediaID: ID!, input: UpdateMediaInput!): Media!
  deleteMedia(mediaID: ID!): MutationResponse!
}

`;
