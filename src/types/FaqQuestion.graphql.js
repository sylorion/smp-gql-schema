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

extend type Query {
  faqQuestion(faqQuestionID: ID!): FaqQuestion
  faqQuestions(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [FaqQuestion!]!
}

type Mutation {
  createFaqQuestion(input: FaqQuestionInput!): FaqQuestion!
  updateFaqQuestion(faqQuestionID: ID!, input: FaqQuestionInput!): FaqQuestion!
  deleteFaqQuestion(faqQuestionID: ID!): MutationResponse!
}

type Subscription {
  faqQuestionAdded: FaqQuestion!
  faqQuestionUpdated: FaqQuestion!
  faqQuestionDeleted: FaqQuestion!
}
`;
