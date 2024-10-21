export default /* GraphQL */ `
# src/graphql/types/Notification.graphql.js

type Notification {
  notificationID: ID!
  userID: ID!
  title: String!
  message: String!
  readAt: DateTime
  link: String
  state:ObjectStatus
  slug: String
  uniqRef: String
  type: NotificationType
  notificationTemplateID: ID
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateNotificationInput {
  userID: ID!
  title: String!
  state: ObjectStatus
  message: String!
  notificationTemplateID: ID
  link: String
}

input UpdateNotificationInput {
  title: String
  message: String
  link: String
  state: ObjectStatus
  type: NotificationType
}

extend type Query {
  notification(notificationID: ID!): Notification
  notifications(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Notification!]!
  notificationBySlug(Slug: String!): Notification
  notificationsByIDs(notificationIDs: [ID!]!): [Notification!]!
  notificationsBySlugs(slugs: [String!]!): [Notification!]!
  notificationByUniqRef(UniqRef: String!): Notification
  notificationsByUserID(userID: ID!): [Notification!]!
  
}

type Mutation {
  createNotification(input: CreateNotificationInput!): Notification!
  updateNotification(notificationID: ID!, input: UpdateNotificationInput!): Notification!
  deleteNotification(notificationID: ID!): MutationResponse!
  markNotificationAsRead(notificationID: ID!): Notification!
}


`;
