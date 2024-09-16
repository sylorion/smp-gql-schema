export default /* GraphQL */ `
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

input CreateProfileInput {
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

input UpdateProfileInput {
  profileID: ID!
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

extend type Query {
  profile(profileID: ID!): Profile
  profiles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Profile!]!
}

type Mutation {
  createProfile(input: CreateProfileInput!): Profile!
  updateProfile(profileID: ID!, input: UpdateProfileInput!): Profile!
  deleteProfile(profileID: ID!): MutationResponse!
}

extend type Subscription {
  profileAdded: Profile!
  profileUpdated: Profile!
  profileDeleted: Profile!
}
`;
