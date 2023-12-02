export default `
# src/graphql/types/TermsAndConditions.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
        
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

type TermsAndConditionsResponse implements FaillibleResponse {
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
