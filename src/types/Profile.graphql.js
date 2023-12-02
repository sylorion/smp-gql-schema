export default `
# src/graphql/types/Profile.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

type Profile implements ServicesEntity & ServicesNavigableEntity & ServicesStatable  @shareable {
  profileID: ID
  uniqRef: String
  slug: String
  firstName: String
  lastName: String
  dateOfBirth: Date
  gender: ProfileGender
  nationality: String
  phoneNumber: String
  locationID: ID
  idCardNumber: String
  passportNumber: String
  socialSecurityNumber: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

extend type User  @shareable {
  profile: Profile!
}

input ProfileInput {
  profileID: ID
  firstName: String
  lastName: String
  dateOfBirth: Date
  gender: ProfileGender
  nationality: String
  phoneNumber: String
  locationID: ID
  idCardNumber: String
  passportNumber: String
  socialSecurityNumber: String
  state: ObjectStatus
}

extend input UserInput {
  profile: ProfileInput
}

type ProfileResponse   @shareable {
  data: [Profile!]
  errors: [MutationError!]
}

extend type Query  @shareable {
  profile(id: ID!): ProfileResponse
  profiles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ProfileResponse
}

type Mutation  @shareable {
  createProfile(input: ProfileInput!): ProfileResponse!
  updateProfile(profileID: ID!, input: ProfileInput!): ProfileResponse!
  deleteProfile(profileID: ID!): MutationResponse!
}

type Subscription  @shareable {
  profileAdded: Profile!
  profileUpdated: Profile!
  profileDeleted: Profile!
}
`;
