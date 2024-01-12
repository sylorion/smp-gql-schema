export default `
# src/graphql/types/TopicOrganization.graphql.js

type TopicOrganization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  topicOrganizationID: ID!
  topicID: ID
  uniqRef: String
  slug: String
  organizationID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input TopicOrganizationInput {
  topicOrganizationID: ID
  topicID: ID
  organizationID: ID
  state: ObjectStatus
}

extend type Query {
  topicOrganization(topicOrganizationID: ID!): TopicOrganization
  topicOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [TopicOrganization!]!
}

type Mutation {
  createTopicOrganization(input: TopicOrganizationInput!): TopicOrganization!
  updateTopicOrganization(topicOrganizationID: ID!, input: TopicOrganizationInput!): TopicOrganization!
  deleteTopicOrganization(topicOrganizationID: ID!): MutationResponse!
}

type Subscription {
  topicOrganizationAdded: TopicOrganization!
  topicOrganizationUpdated: TopicOrganization!
  topicOrganizationDeleted: TopicOrganization!
}
`;
