export default `
# src/graphql/types/Profile.graphql.js

type Profile {
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

extend type User {
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

type ProfileResponse {
  data: [Profile!]
  errors: [MutationError!]
}

extend type Query {
  profile(id: ID!): Profile
  profiles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): Profile
}

type Mutation {
  createProfile(input: ProfileInput!): Profile!
  updateProfile(profileID: ID!, input: ProfileInput!): Profile!
  deleteProfile(profileID: ID!): MutationResponse!
}

type Subscription {
  profileAdded: Profile!
  profileUpdated: Profile!
  profileDeleted: Profile!
}
`;
