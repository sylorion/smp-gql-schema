export default `
# src/graphql/types/Profile.graphql.js

type Profile implements ServicesEntity & ServicesNavigableEntity & ServicesStatable  {
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

type ProfileResponse implements FaillibleResponse {
  data: [Profile!]
  errors: [MutationError!]
}

extend type Query {
  profile(id: ID!): ProfileResponse
  profiles(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ProfileResponse
}

type Mutation {
  createProfile(input: ProfileInput!): ProfileResponse!
  updateProfile(profileID: ID!, input: ProfileInput!): ProfileResponse!
  deleteProfile(profileID: ID!): MutationResponse!
}

type Subscription {
  profileAdded: Profile!
  profileUpdated: Profile!
  profileDeleted: Profile!
}
`;
