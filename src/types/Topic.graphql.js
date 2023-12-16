export default `
# src/graphql/types/Topic.graphql.js

type Topic implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  topicID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  title: String
  description: String
  parentTopicID: ID 
  # To design criteria as a hierarchical graph, higher is the level more accurate is the topic
  level: Int
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input TopicInput {
  topicID: ID
  authorID: ID
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
}

extend type Tag {
  topic: Topic
}

extend type Service {
  topic: Topic
}

extend type Discount {
  topic: Topic
}

extend type Criteria {
  topic: Topic
}

type Mutation {
  createTopic(input: TopicInput!): Topic!
  updateTopic(topicID: ID!, input: TopicInput!): Topic!
  deleteTopic(topicID: ID!): MutationResponse!
}

type Subscription {
  topicAdded:   Topic!
  topicUpdated: Topic!
  topicDeleted: Topic!
}
`;
