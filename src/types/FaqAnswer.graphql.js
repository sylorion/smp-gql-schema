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

extend type Query {
  faqAnswer(faqAnswerID: ID!): FaqAnswer
  faqAnswers(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [FaqAnswer!]!
}

type Mutation {
  createFaqAnswer(input: FaqAnswerInput!): FaqAnswer!
  updateFaqAnswer(faqAnswerID: ID!, input: FaqAnswerInput!): FaqAnswer!
  deleteFaqAnswer(faqAnswerID: ID!): MutationResponse!
}

type Subscription {
  faqAnswerAdded: FaqAnswer!
  faqAnswerUpdated: FaqAnswer!
  faqAnswerDeleted: FaqAnswer!
}
`;
