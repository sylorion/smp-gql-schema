export default /* GraphQL */ `
# src/graphql/types/NotificationTemplate.graphql.js

type NotificationTemplate {
  notificationTemplateID: ID!
  title: String!
  message: String!
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateNotificationTemplateInput {
  title: String!
  message: String!
}

input UpdateNotificationTemplateInput {
  title: String
  message: String
}

extend type Query {
  notificationTemplate(notificationTemplateID: ID!): NotificationTemplate
  notificationTemplates(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [NotificationTemplate!]!
  notificationTemplateBySlug(Slug: String!): NotificationTemplate
  notificationTemplatesByIDs(notificationTemplateIDs: [ID!]!): [NotificationTemplate!]!
  notificationTemplatesBySlugs(slugs: [String!]!): [NotificationTemplate!]!
  notificationTemplateByUniqRef(uniqRef: String!): NotificationTemplate
}

type Mutation {
  createNotificationTemplate(input: CreateNotificationTemplateInput!): NotificationTemplate!
  updateNotificationTemplate(notificationTemplateID: ID!, input: UpdateNotificationTemplateInput!): NotificationTemplate!
  deleteNotificationTemplate(notificationTemplateID: ID!): MutationResponse!
}

`;
