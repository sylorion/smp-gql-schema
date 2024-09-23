export default /* GraphQL */ `
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

input CreateFaqQuestionInput {
  
  topicID: ID!
  lang: String!
  question: String!
  state: ObjectStatus
}

input UpdateFaqQuestionInput {
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
  ): [FaqQuestion!]!,
  faqQuestionBySlug(Slug: String!): FaqQuestion
  faqQuestionsByIDs(faqQuestionIDs: [ID!]!): [FaqQuestion!]!
  faqQuestionsBySlugs(slugs: [String!]!): [FaqQuestion!]!
  faqQuestionByUniqRef(UniqRef: String!): FaqQuestion
}

type Mutation {
  createFaqQuestion(input: CreateFaqQuestionInput!): FaqQuestion!
  updateFaqQuestion(faqQuestionID: ID!, input: UpdateFaqQuestionInput!): FaqQuestion!
  deleteFaqQuestion(faqQuestionID: ID!): MutationResponse!
}


`;
