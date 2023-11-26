export default `
# src/graphql/types/FaqAnswer.graphql.js

type FaqAnswer implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  faqAnswerID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  topicID: ID
  lang: String
  answer: String
  parentFaqAnswerID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input FaqAnswerInput {
  faqAnswerID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  topicID: ID
  lang: String
  answer: String
  parentFaqAnswerID: ID
  state: ObjectStatus
}

type FaqAnswerResponse implements FallibleResponse {
  data: [FaqAnswer!]
  errors: [MutationError!]
}

extend type Query {
  faqAnswer(faqAnswerID: ID!): FaqAnswerResponse
  faqAnswers(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): FaqAnswerResponse
}

type Mutation {
  createFaqAnswer(input: FaqAnswerInput!): FaqAnswerResponse!
  updateFaqAnswer(faqAnswerID: ID!, input: FaqAnswerInput!): FaqAnswerResponse!
  deleteFaqAnswer(faqAnswerID: ID!): MutationResponse!
}

type Subscription {
  faqAnswerAdded: FaqAnswer!
  faqAnswerUpdated: FaqAnswer!
  faqAnswerDeleted: FaqAnswer!
}
`;
