export default `
# src/graphql/types/Application.graphql.js
scalar JSON
type Application {
  applicationID: ID!
  uniqRef: String
  slug: String
  author: User
  officialName: String
  developer: User
  authKey: String
  plan: String
  isOfficialApp: Boolean
  appConfiguration: JSON
  state: ObjectStatus
  createdAt: DateTime!
  updatedAt: DateTime
  deletedAt: DateTime
}

input ApplicationInput {
  applicationID: ID
  authorID: ID
  officialName: String
  developerID: ID
  authKey: String
  plan: String
  isOfficialApp: Boolean
  appConfiguration: String
  state: ObjectStatus
}

type ApplicationResponse implements FallibleResponse {
  data: [Application!]
  errors: [MutationError!]
}

extend type Query {
  application(applicationID: ID!): ApplicationResponse
  applications(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ApplicationResponse
}

extend type User {
  applications(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Application!]
}

type Mutation {
  createApplication(input: ApplicationInput!): ApplicationResponse!
  updateApplication(applicationID: ID!, input: ApplicationInput!): ApplicationResponse!
  deleteApplication(applicationID: ID!): MutationResponse!
}

type Subscription {
  applicationAdded: Application!
  applicationUpdated: Application!
  applicationDeleted: Application!
}
`;
