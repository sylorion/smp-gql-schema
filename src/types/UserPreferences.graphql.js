export default `
# src/graphql/types/UserPreferences.graphql.js

type UserPreferences implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  preferenceID: ID!
  uniqRef: String
  slug: String
  userID: ID
  lang: String
  timeZone: String
  notificationPreferences: String
  privacySettings: String
  theme: Int
  marketplaceConfig: String
  defaultCurrency: ServicesAcceptedDevice
  defaultPaymentMethodID: ID
  notificationFrequency: NotificationFrequencyPref
  showRecommendations: Boolean
  otherSettings: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input UserPreferencesInput {
  preferenceID: ID
  userID: ID
  lang: String
  timeZone: String
  notificationPreferences: String
  privacySettings: String
  theme: Int
  marketplaceConfig: String
  defaultCurrency: ServicesAcceptedDevice
  defaultPaymentMethodID: ID
  notificationFrequency: NotificationFrequencyPref
  showRecommendations: Boolean
  otherSettings: String
  state: ObjectStatus
}

extend type Query {
  userPreferences(preferenceID: ID!): UserPreferences
  userPreferencesList(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserPreferences!]!
}

type Mutation {
  createUserPreferences(input: UserPreferencesInput!): UserPreferences!
  updateUserPreferences(preferenceID: ID!, input: UserPreferencesInput!): UserPreferences!
  updateUserNotificationPreferences(preferenceID: ID!, input: UserPreferencesInput!): UserPreferences!
  updateUserPrivacySettings(preferenceID: ID!, input: UserPreferencesInput!): UserPreferences!
  updateUserOtherSettings(preferenceID: ID!, input: UserPreferencesInput!): UserPreferences!
  updateMarketplaceConfig(preferenceID: ID!, input: UserPreferencesInput!): UserPreferences!
  deleteUserPreferences(preferenceID: ID!): MutationResponse!
}

type Subscription {
  userPreferencesAdded: UserPreferences!
  userPreferencesListing: UserPreferences!
  userPreferencesUpdated: UserPreferences!
  userPreferencesDeleted: UserPreferences!
}
`;
