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
}

type Mutation {
  createNotificationTemplate(input: CreateNotificationTemplateInput!): NotificationTemplate!
  updateNotificationTemplate(notificationTemplateID: ID!, input: UpdateNotificationTemplateInput!): NotificationTemplate!
  deleteNotificationTemplate(notificationTemplateID: ID!): MutationResponse!
}

extend type Subscription {
  notificationTemplateAdded: NotificationTemplate!
  notificationTemplateUpdated: NotificationTemplate!
  notificationTemplateDeleted: NotificationTemplate!
}
`;
