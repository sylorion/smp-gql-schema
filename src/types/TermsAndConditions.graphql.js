export default `
# src/graphql/types/TermsAndConditions.graphql.js

type TermsAndConditions implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  termsAndConditionsID: ID!
  uniqRef: String!
  slug: String!
  authorID: ID!
  organizationID: ID!
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

extend type Query {
  termsAndConditions(termsAndConditionsID: ID!): TermsAndConditions
  termsAndConditionsList(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [TermsAndConditions!]!
}

type Mutation {
  createTermsAndConditions(input: TermsAndConditionsInput!): TermsAndConditions!
  updateTermsAndConditions(termsAndConditionsID: ID!, input: TermsAndConditionsInput!): TermsAndConditions!
  deleteTermsAndConditions(termsAndConditionsID: ID!): MutationResponse!
}

type Subscription {
  termsAndConditionsAdded: TermsAndConditions!
  termsAndConditionsUpdated: TermsAndConditions!
  termsAndConditionsDeleted: TermsAndConditions!
}
`;
