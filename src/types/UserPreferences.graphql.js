export default `
# src/graphql/types/UserPreferences.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

type UserPreferences implements ServicesEntity & ServicesNavigableEntity & ServicesStatable @shareable {
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

type UserPreferencesResponse implements FaillibleResponse @shareable {
  data: [UserPreferences!]
  errors: [MutationError!]
}

extend type Query @shareable {
  userPreferences(preferenceID: ID!): UserPreferencesResponse
  userPreferencesList(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): UserPreferencesResponse
}

type Mutation @shareable {
  createUserPreferences(input: UserPreferencesInput!): UserPreferencesResponse!
  updateUserPreferences(preferenceID: ID!, input: UserPreferencesInput!): UserPreferencesResponse!
  updateUserNotificationPreferences(preferenceID: ID!, input: UserPreferencesInput!): UserPreferencesResponse!
  updateUserPrivacySettings(preferenceID: ID!, input: UserPreferencesInput!): UserPreferencesResponse!
  updateUserOtherSettings(preferenceID: ID!, input: UserPreferencesInput!): UserPreferencesResponse!
  updateMarketplaceConfig(preferenceID: ID!, input: UserPreferencesInput!): UserPreferencesResponse!
  deleteUserPreferences(preferenceID: ID!): MutationResponse!
}

type Subscription @shareable {
  userPreferencesAdded: UserPreferences!
  userPreferencesUpdated: UserPreferences!
  userPreferencesDeleted: UserPreferences!
}
`;
