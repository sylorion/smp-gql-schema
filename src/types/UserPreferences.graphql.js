export default `
# src/graphql/types/UserPreferences.graphql.js

type UserPreferences implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  preferenceID: ID!
  uniqRef: String
  slug: String
  userID: ID
  lang: String
  timeZone: String
  notificationPreferences: JSON
  privacySettings: JSON
  theme: Int
  marketplaceConfig: JSON
  defaultCurrency: ServicesAcceptedDevice
  defaultPaymentMethodID: ID
  notificationFrequency: NotificationFrequencyPref
  showRecommendations: Boolean
  otherSettings: JSON
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
  notificationPreferences: JSON
  privacySettings: JSON
  theme: Int
  marketplaceConfig: JSON
  defaultCurrency: ServicesAcceptedDevice
  defaultPaymentMethodID: ID
  notificationFrequency: NotificationFrequencyPref
  showRecommendations: Boolean
  otherSettings: JSON
  state: ObjectStatus
}

extend type Query {
  userPreference(preferenceID: ID!): UserPreferences
  userPreferencesByID(preferenceID: ID!): UserPreferences
  userPreferencesByLang(
    lang: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserPreferences!]!
  userPreferencesByUserID(
    userID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserPreferences!]!
  userPreferencesByIDs(
    ids: [ID!]!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [UserPreferences!]!
  userPreferences(
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
  userPreferencesDetails: UserPreferences!
  userPreferencesUpdated: UserPreferences!
  userPreferencesDeleted: UserPreferences!
}
`;
