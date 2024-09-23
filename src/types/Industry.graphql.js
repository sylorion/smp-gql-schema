export default /* GraphQL */ `
# src/graphql/types/Industry.graphql.js

type Industry {
  industryID: ID!
  authorID: ID
  title: String
  description: String
  level: Int!
  slug: String
  uniqRef: String
  parentIndustryID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateIndustryInput {
  
  title: String!
  description: String!
  level: Int!
  parentIndustryID: ID
  state: ObjectStatus
}

input UpdateIndustryInput {
  
  title: String
  description: String
  level: Int
  parentIndustryID: ID
  state: ObjectStatus
}

extend type Query {
  industry(industryID: ID!): Industry
  industries(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Industry!]!,
  industryBySlug(Slug: String!): Industry
  industriesByIDs(industryIDs: [ID!]!): [Industry!]!
  industriesBySlugs(slugs: [String!]!): [Industry!]!
  industryByUniqRef(UniqRef: String!): Industry
}

type Mutation {
  createIndustry(input: CreateIndustryInput!): Industry!
  updateIndustry(industryID: ID!, input: UpdateIndustryInput!): Industry!
  deleteIndustry(industryID: ID!): MutationResponse!
}


`;
