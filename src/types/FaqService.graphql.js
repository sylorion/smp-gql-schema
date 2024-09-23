export default /* GraphQL */ `
# src/graphql/types/FaqService.graphql.js

type FaqService implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  faqServiceID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  order: ID
  faqAnswerID: ID
  faqQuestionID: ID
  serviceID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateFaqServiceInput {
  
  order: ID
  faqAnswerID: ID!
  faqQuestionID: ID!
  serviceID: ID!
  state: ObjectStatus
}

input UpdateFaqServiceInput {
  
  order: ID
  faqAnswerID: ID
  faqQuestionID: ID
  serviceID: ID
  state: ObjectStatus
}

extend type Query {
  faqService(faqServiceID: ID!): FaqService
  faqServices(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [FaqService!]!,
  faqServiceBySlug(Slug: String!): FaqService
  faqServicesByIDs(faqServiceIDs: [ID!]!): [FaqService!]!
  faqServicesBySlugs(slugs: [String!]!): [FaqService!]!
  faqServiceByUniqRef(UniqRef: String!): FaqService
}

type Mutation {
  createFaqService(input: CreateFaqServiceInput!): FaqService!
  updateFaqService(faqServiceID: ID!, input: UpdateFaqServiceInput!): FaqService!
  deleteFaqService(faqServiceID: ID!): MutationResponse!
}

`;
