export default /* GraphQL */ `
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

input CreateTopicOrganizationInput {
  topicID: ID!
  organizationID: ID!
  state: ObjectStatus
}

input UpdateTopicOrganizationInput {
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
  topicOrganizationBySlug(Slug: String!): TopicOrganization
  topicOrganizationsByIDs(topicOrganizationIDs: [ID!]!): [TopicOrganization!]!
  topicOrganizationsBySlugs(slugs: [String!]!): [TopicOrganization!]!
  topicOrganizationByUniqRef(UniqRef: String!): TopicOrganization
}

type Mutation {
  createTopicOrganization(input: CreateTopicOrganizationInput!): TopicOrganization!
  updateTopicOrganization(topicOrganizationID: ID!, input: UpdateTopicOrganizationInput!): TopicOrganization!
  deleteTopicOrganization(topicOrganizationID: ID!): Boolean!
}


`;
