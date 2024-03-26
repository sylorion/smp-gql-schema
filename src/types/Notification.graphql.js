export default `
# src/graphql/types/Notification.graphql.js

type Notification {
  notificationID: ID!
  userID: ID!
  title: String!
  message: String!
  readAt: DateTime
  link: String
  type: NotificationType
  notificationTemplateID: ID
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input NotificationInput {
  userID: ID!
  title: String!
  message: String!
  notificationTemplateID: ID
  link: String
}

extend type Query {
  notification(notificationID: ID!): Notification
  notifications(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Notification!]!
}

type Mutation {
  createNotification(input: NotificationInput!): Notification!
  updateNotification(notificationID: ID!, input: NotificationInput!): Notification!
  deleteNotification(notificationID: ID!): MutationResponse!
  markNotificationAsRead(notificationID: ID!): Notification!
}

type Subscription {
  notificationAdded: Notification!
  notificationUpdated: Notification!
  notificationDeleted: Notification!
}
`;
