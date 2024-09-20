export default /* GraphQL */ `
# src/graphql/types/TermsAndConditions.graphql.js

type TermsAndConditions implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  termsAndConditionsID: ID!
  uniqRef: String!
  slug: String!
  
  organizationID: ID!
  tacContent: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateTermsAndConditionsInput {
  
  organizationID: ID!
  tacContent: String!
  state: ObjectStatus
}

input UpdateTermsAndConditionsInput {
  
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
  createTermsAndConditions(input: CreateTermsAndConditionsInput!): TermsAndConditions!
  updateTermsAndConditions(termsAndConditionsID: ID!, input: UpdateTermsAndConditionsInput!): TermsAndConditions!
  deleteTermsAndConditions(termsAndConditionsID: ID!): MutationResponse!
}


`;
