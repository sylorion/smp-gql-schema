export default `
# src/graphql/types/TopicOrganizationrganization.graphql.js

type TopicOrganizationrganization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  topicOrganizationrganizationID: ID!
  topicID: ID
  uniqRef: String
  slug: String
  organizationID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input TopicOrganizationrganizationInput {
  topicOrganizationrganizationID: ID
  topicID: ID
  organizationID: ID
  state: ObjectStatus
}

extend type Query {
  topicOrganizationrganization(topicOrganizationrganizationID: ID!): TopicOrganizationrganization
  topicOrganizationrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [TopicOrganizationrganization!]!
}

type Mutation {
  createTopicOrganizationrganization(input: TopicOrganizationrganizationInput!): TopicOrganizationrganization!
  updateTopicOrganizationrganization(topicOrganizationrganizationID: ID!, input: TopicOrganizationrganizationInput!): TopicOrganizationrganization!
  deleteTopicOrganizationrganization(topicOrganizationrganizationID: ID!): MutationResponse!
}

type Subscription {
  topicOrganizationrganizationAdded: TopicOrganizationrganization!
  topicOrganizationrganizationUpdated: TopicOrganizationrganization!
  topicOrganizationrganizationDeleted: TopicOrganizationrganization!
}
`;
