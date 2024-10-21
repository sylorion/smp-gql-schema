export default /* GraphQL */ `
# src/graphql/types/Topic.graphql.js

type Topic implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  topicID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  title: String
  description: String
  parentTopicID: ID 
  level: Int
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateTopicInput {
  
  title: String!
  description: String!
  parentTopicID: ID
  level: Int
  state: ObjectStatus
}

input UpdateTopicInput {
  
  title: String
  description: String
  parentTopicID: ID
  level: Int
  state: ObjectStatus
}

extend type Query {
  topic(topicID: ID!): Topic
  topics(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Topic!]!
  topicBySlug(Slug: String!): Topic
  topicsByIDs(topicIDs: [ID!]!): [Topic!]!
  topicsBySlugs(slugs: [String!]!): [Topic!]!
  topicByUniqRef(UniqRef: String!): Topic
}

type Mutation {
  createTopic(input: CreateTopicInput!): Topic!
  updateTopic(topicID: ID!, input: UpdateTopicInput!): Topic!
  deleteTopic(topicID: ID!): Boolean!
}


`;
