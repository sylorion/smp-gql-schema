export default `
# src/graphql/types/Industry.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
type Industry {
  industryID: ID!
  authorID: ID
  title: String
  description: String
  level: Int!
  parentIndustryID: ID # of a potentiel parent hiearchy
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input IndustryInput {
  industryID: ID!
  authorID: ID
  title: String
  description: String
  level: Int!
  parentIndustryID: ID # of a potentiel parent hiearchy
  state: ObjectStatus
}

type IndustryResponse implements FaillibleResponse {
  data: [Industry!]
  errors: [MutationError!]
}

extend type Query {
  industry(industryID: ID!): IndustryResponse
  industrys(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): IndustryResponse
}

type Mutation {
  industryService(serviceID: ID!): IndustryResponse!
  industryOrganization(organizationID: ID!): IndustryResponse!
  updateIndustryDetails(industryID: ID!, input: IndustryInput!): IndustryResponse!
  unIndustryService(serviceID: ID!): Boolean!
  unIndustryOrganization(organizationID: ID!): Boolean!
}

type Subscription {
  IndustryAdded: Industry!
  IndustryUpdated: Industry!
  IndustryDeleted: Industry!
}
`;
