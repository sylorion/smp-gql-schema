export default /* GraphQL */ `
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

input CreateTagInput {
  authorID: ID!
  value: String!
  topicID: ID
  state: ObjectStatus
}

input UpdateTagInput {
  authorID: ID!
  value: String
  topicID: ID
  state: ObjectStatus
}

extend type Query {
  tag(tagID: ID!): Tag
  tags(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Tag!]!
}

type Mutation {
  createTag(input: CreateTagInput!): Tag!
  updateTag(tagID: ID!, input: UpdateTagInput!): Tag!
  deleteTag(tagID: ID!): MutationResponse!
}

extend type Subscription {
  tagAdded: Tag!
  tagUpdated: Tag!
  tagDeleted: Tag!
}
`;

