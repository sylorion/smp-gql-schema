export default /* GraphQL */`
# src/graphql/types/Application.graphql.js

type Application {
  applicationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  title: String
  description: String
  officialName: String
  developerID: ID
  authKey: String
  plan: String
  isOfficialApp: Boolean
  appConfiguration: JSON
  state: ObjectStatus
  createdAt: DateTime!
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateApplicationInput {
  authorID: ID!
  title: String!
  description: String
  officialName: String
  developerID: ID
  authKey: String
  plan: String
  isOfficialApp: Boolean
  appConfiguration: String
  state: ObjectStatus
}

input UpdateApplicationInput {
  authorID: ID!
  title: String
  description: String
  officialName: String
  developerID: ID
  authKey: String
  plan: String
  isOfficialApp: Boolean
  appConfiguration: String
  state: ObjectStatus
}

extend type Query {
  application(applicationID: ID!): Application
  applications(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Application!]!
}

type Mutation {
  createApplication(input: CreateApplicationInput!): Application!
  updateApplication(applicationID: ID!, input: UpdateApplicationInput!): Application!
  deleteApplication(applicationID: ID!): MutationResponse!
}

type Subscription {
  # When appear to a search or listing
  applicationListing: Application!
  # When loaded for full details aka applicationbyid or slug
  applicationDetails: Application!
  applicationAdded: Application!
  applicationUpdated: Application!
  applicationDeleted: Application!
}
`;
