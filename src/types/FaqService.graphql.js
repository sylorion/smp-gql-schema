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
  uniqRef: String
  slug: String
  authorID: ID
  order: ID
  faqAnswerID: ID
  faqQuestionID: ID
  serviceID: ID
  question: String 
  state: ObjectStatus
}

type FaqServiceResponse implements FallibleResponse {
  data: [FaqService!]
  errors: [MutationError!]
}

extend type Query {
  faqService(faqServiceID: ID!): FaqServiceResponse
  faqServices(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): FaqServiceResponse
}

type Mutation {
  createFaqService(input: FaqServiceInput!): FaqServiceResponse!
  updateFaqService(faqServiceID: ID!, input: FaqServiceInput!): FaqServiceResponse!
  deleteFaqService(faqServiceID: ID!): MutationResponse!
}

type Subscription {
  faqServiceAdded: FaqService!
  faqServiceUpdated: FaqService!
  faqServiceDeleted: FaqService!
}
`;
