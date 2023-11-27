export default `
# src/graphql/types/Topic.graphql.js
type Topic implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  topicID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  title: String
  description: String
  parentID: ID
  parent: Topic
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
  parentID: ID
  level: Int
  state: ObjectStatus
}

type TopicResponse implements FaillibleResponse {
  data: [Topic!]
  errors: [MutationError!]
}

extend type Query {
  topic(topicID: ID!): TopicResponse
  topics(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): TopicResponse
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
  createTopic(input: TopicInput!): TopicResponse!
  updateTopic(topicID: ID!, input: TopicInput!): TopicResponse!
  deleteTopic(topicID: ID!): MutationResponse!
}

type Subscription {
  topicAdded:   Topic!
  topicUpdated: Topic!
  topicDeleted: Topic!
}
`;
