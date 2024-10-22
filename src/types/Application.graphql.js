export default /* GraphQL */`
# src/graphql/types/Application.graphql.js

type Application {
  applicationID: ID!
  uniqRef: String
  slug: String
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
  title: String!
  description: String!
  officialName: String!
  developerID: ID!
  plan: String
  isOfficialApp: Boolean
  appConfiguration: String
  state: ObjectStatus
}

input UpdateApplicationInput {
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
  ): [Application!]!,
  applicationBySlug(Slug: String!): Application,
  applicationsByIDs(applicationIDs: [ID!]!): [Application!]!,
  applicationsBySlugs(slugs: [String!]!): [Application!]!
  applicationByUniqRef(uniqRef: String!): Application!  
}

type Mutation {
  createApplication(input: CreateApplicationInput!): Application!
  applicationSignUP(input: CreateApplicationInput!): Application!
  updateApplication(applicationID: ID!, input: UpdateApplicationInput!): Application!
  deleteApplication(applicationID: ID!): MutationResponse!
}


`;
