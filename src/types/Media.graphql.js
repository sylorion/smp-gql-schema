export default /* GraphQL */ `
# src/graphql/types/Media.graphql.js

type Media implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  mediaID: ID!
  uniqRef: String
  slug: String
  
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

input CreateMediaInput {
  
  mediaType: MediaType
  legend: String
  summary: String
  originalName: String
  finalName: String
  url: String
  size: String
  state: ObjectStatus
}

input UpdateMediaInput {
  authorID: ID
  # mediaType: MediaType
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
  mediaBySlug(Slug: String!): Media
  mediasByIDs(mediaIDs: [ID!]!): [Media!]!
  mediasBySlugs(slugs: [String!]!): [Media!]!
  mediaByUniqRef(UniqRef: String!): Media
}

type Mutation {
  createMedia(input: CreateMediaInput!): Media!
  updateMedia(mediaID: ID!, input: UpdateMediaInput!): Media!
  deleteMedia(mediaID: ID!): MutationResponse!
}

`;
