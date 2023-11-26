export default `
# src/graphql/types/FaqQuestion.graphql.js

type FaqQuestion implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  faqQuestionID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  topicID: ID
  lang: String
  question: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input FaqQuestionInput {
  faqQuestionID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  topicID: ID
  lang: String
  question: String 
  state: ObjectStatus
}

type FaqQuestionResponse implements FallibleResponse {
  data: [FaqQuestion!]
  errors: [MutationError!]
}

extend type Query {
  faqQuestion(faqQuestionID: ID!): FaqQuestionResponse
  faqQuestions(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): FaqQuestionResponse
}

type Mutation {
  createFaqQuestion(input: FaqQuestionInput!): FaqQuestionResponse!
  updateFaqQuestion(faqQuestionID: ID!, input: FaqQuestionInput!): FaqQuestionResponse!
  deleteFaqQuestion(faqQuestionID: ID!): MutationResponse!
}

type Subscription {
  faqQuestionAdded: FaqQuestion!
  faqQuestionUpdated: FaqQuestion!
  faqQuestionDeleted: FaqQuestion!
}
`;
