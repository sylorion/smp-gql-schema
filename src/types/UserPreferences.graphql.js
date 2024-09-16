export default /* GraphQL */ `
# src/graphql/types/UserPreferences.graphql.js

type UserPreferences implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  userPreferencesID: ID!
  uniqRef: String
  slug: String
  userID: ID
  lang: String
  timeZone: String
  notificationPreferences: JSON
  privacySettings: JSON
  theme: Int
  marketplaceConfig: JSON
  defaultCurrency: String
  defaultPaymentMethodID: ID
  notificationFrequency: String
  showRecommendations: Boolean
  otherSettings: JSON
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateUserPreferencesInput {
  userID: ID!
  lang: String!
  timeZone: String
  notificationPreferences: JSON
  privacySettings: JSON
  theme: Int
  marketplaceConfig: JSON
  defaultCurrency: String
  defaultPaymentMethodID: ID
  notificationFrequency: String
  showRecommendations: Boolean
  otherSettings: JSON
  state: ObjectStatus
}

input UpdateUserPreferencesInput {
  lang: String
  timeZone: String
  notificationPreferences: JSON
  privacySettings: JSON
  theme: Int
  marketplaceConfig: JSON
  defaultCurrency: String
  defaultPaymentMethodID: ID
  notificationFrequency: String
  showRecommendations: Boolean
  otherSettings: JSON
  state: ObjectStatus
}

extend type Query {
  userPreference(userPreferencesID: ID!): UserPreferences
  userPreferences(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserPreferences!]!
}

type Mutation {
  createUserPreferences(input: CreateUserPreferencesInput!): UserPreferences!
  updateUserPreferences(userPreferencesID: ID!, input: UpdateUserPreferencesInput!): UserPreferences!
  deleteUserPreferences(userPreferencesID: ID!): MutationResponse!
}

extend type Subscription {
  userPreferencesAdded: UserPreferences!
  userPreferencesUpdated: UserPreferences!
  userPreferencesDeleted: UserPreferences!
}
`;
