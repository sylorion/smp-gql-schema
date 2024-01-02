export default `
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

input FaqServiceInput {
  faqServiceID: ID! 
  authorID: ID
  order: ID
  faqAnswerID: ID
  faqQuestionID: ID
  serviceID: ID
  question: String 
  state: ObjectStatus
}

extend type Query {
  faqService(faqServiceID: ID!): FaqService
  faqServices(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [FaqService!]!
}

type Mutation {
  createFaqService(input: FaqServiceInput!): FaqService!
  updateFaqService(faqServiceID: ID!, input: FaqServiceInput!): FaqService!
  deleteFaqService(faqServiceID: ID!): MutationResponse!
}

type Subscription {
  faqServiceAdded: FaqService!
  faqServiceUpdated: FaqService!
  faqServiceDeleted: FaqService!
}
`;
