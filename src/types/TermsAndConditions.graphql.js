export default `
# src/graphql/types/TermsAndConditions.graphql.js

type TermsAndConditions implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  termsAndConditionsID: ID!
  uniqRef: String!
  slug: String!
  author: User
  organizationID: ID
  tacContent: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input TermsAndConditionsInput {
  termsAndConditionsID: ID
  authorID: ID
  organizationID: ID
  tacContent: String
  state: ObjectStatus
}

type TermsAndConditionsResponse  {
  data: [TermsAndConditions!]
  errors: [MutationError!]
}

extend type Query {
  termsAndConditions(termsAndConditionsID: ID!): TermsAndConditionsResponse
  termsAndConditionsList(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): TermsAndConditionsResponse
}

type Mutation {
  createTermsAndConditions(input: TermsAndConditionsInput!): TermsAndConditionsResponse!
  updateTermsAndConditions(termsAndConditionsID: ID!, input: TermsAndConditionsInput!): TermsAndConditionsResponse!
  deleteTermsAndConditions(termsAndConditionsID: ID!): MutationResponse!
}

type Subscription {
  termsAndConditionsAdded: TermsAndConditions!
  termsAndConditionsUpdated: TermsAndConditions!
  termsAndConditionsDeleted: TermsAndConditions!
}
`;
