export default `
# src/graphql/types/Industry.graphql.js

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
  industryID: ID
  authorID: ID
  title: String
  description: String
  level: Int
  parentIndustryID: ID # of a potentiel parent hiearchy
  state: ObjectStatus
} 
extend type Query {
  industry(industryID: ID!): Industry
  industrys(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Industry!]!
}

type Mutation {
  industryService(serviceID: ID!): Industry!
  industryOrganization(organizationID: ID!): Industry!
  createIndustry(input: IndustryInput!): Industry!
  updateIndustry(industryID: ID!, input: IndustryInput!): Industry!
  deleteIndustry(industryID: ID!): MutationResponse!
  unIndustryService(serviceID: ID!): Boolean!
  unIndustryOrganization(organizationID: ID!): Boolean!
}

type Subscription {
  industryAdded: Industry!
  industryUpdated: Industry!
  industryDeleted: Industry!
}
`;
