export default `
# src/graphql/types/DocFaq.graphql.js

type DocFaq implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  docFaqID: ID!
  uniqRef: String
  slug: String
  author: User
  service: Service
  description: String
  question: String
  answer: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input DocFaqInput {
  docFaqID: ID
  authorID: ID
  serviceID: ID
  description: String
  question: String
  answer: String
  state: ObjectStatus
}

type DocFaqResponse implements FallibleResponse {
  data: [DocFaq!]
  errors: [MutationError!]
}

extend type Query {
  docFaq(docFaqID: ID!): DocFaqResponse
  docFaqs(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): DocFaqResponse
}

type Mutation {
  createDocFaq(input: DocFaqInput!): DocFaqResponse!
  updateDocFaq(docFaqID: ID!, input: DocFaqInput!): DocFaqResponse!
  deleteDocFaq(docFaqID: ID!): MutationResponse!
}

type Subscription {
  docFaqAdded: DocFaq!
  docFaqUpdated: DocFaq!
  docFaqDeleted: DocFaq!
}
`;
