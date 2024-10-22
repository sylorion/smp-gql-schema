export default /* GraphQL */ `
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

input CreateFaqAnswerInput {
  
  topicID: ID!
  lang: String!
  answer: String!
  parentFaqAnswerID: ID
  state: ObjectStatus
}

input UpdateFaqAnswerInput {
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
  ): [FaqAnswer!]!,
  faqAnswerBySlug(Slug: String!): FaqAnswer
  faqAnswersByIDs(faqAnswerIDs: [ID!]!): [FaqAnswer!]!
  faqAnswersBySlugs(slugs: [String!]!): [FaqAnswer!]!
  faqAnswerByUniqRef(uniqRef: String!): FaqAnswer

}

type Mutation {
  createFaqAnswer(input: CreateFaqAnswerInput!): FaqAnswer!
  updateFaqAnswer(faqAnswerID: ID!, input: UpdateFaqAnswerInput!): FaqAnswer!
  deleteFaqAnswer(faqAnswerID: ID!): MutationResponse!
}

`;
