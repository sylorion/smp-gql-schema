export default `
# src/graphql/types/NotificationTemplate.graphql.js

type NotificationTemplate {
  notificationTemplateID: ID!
  title: String!
  message: String!
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input NotificationTemplateInput {
  name: String!
  title: String!
  message: String!
}

extend type Query {
  notificationTemplate(notificationTemplateID: ID!): NotificationTemplate
  notificationTemplates(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [NotificationTemplate!]!
}

type Mutation {
  createNotificationTemplate(input: NotificationTemplateInput!): NotificationTemplate!
  updateNotificationTemplate(notificationTemplateID: ID!, input: NotificationTemplateInput!): NotificationTemplate!
  deleteNotificationTemplate(notificationTemplateID: ID!): MutationResponse!
  markNotificationTemplateAsRead(notificationTemplateID: ID!): NotificationTemplate!
}

type Subscription {
  notificationTemplateAdded: NotificationTemplate!
  notificationTemplateUpdated: NotificationTemplate!
  notificationTemplateDeleted: NotificationTemplate!
}
`;
