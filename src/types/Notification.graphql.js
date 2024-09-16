export default /* GraphQL */ `
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

input CreateNotificationInput {
  userID: ID!
  title: String!
  message: String!
  notificationTemplateID: ID
  link: String
}

input UpdateNotificationInput {
  title: String
  message: String
  link: String
  type: NotificationType
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
  createNotification(input: CreateNotificationInput!): Notification!
  updateNotification(notificationID: ID!, input: UpdateNotificationInput!): Notification!
  deleteNotification(notificationID: ID!): MutationResponse!
  markNotificationAsRead(notificationID: ID!): Notification!
}

extend type Subscription {
  notificationAdded: Notification!
  notificationUpdated: Notification!
  notificationDeleted: Notification!
}
`;
