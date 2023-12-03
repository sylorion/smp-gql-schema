export default `
# src/graphql/types/Tag.graphql.js

type Tag implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  tagID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  value: String
  topicID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input TagInput {
  tagID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  value: String
  topicID: ID
  state: ObjectStatus
}

type TagResponse  {
  data: [Tag!]
  errors: [MutationError!]
}

extend type Query {
  tag(tagID: ID!): TagResponse
  tags(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): TagResponse
}

type Mutation {
  createTag(input: TagInput!): TagResponse!
  updateTag(tagID: ID!, input: TagInput!): TagResponse!
  deleteTag(tagID: ID!): MutationResponse!
}

type Subscription {
  tagAdded:   Tag!
  tagUpdated: Tag!
  tagDeleted: Tag!
}
`;
