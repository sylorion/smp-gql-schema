export default `
# src/graphql/types/FaqOrganization.graphql.js

type FaqOrganization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  faqOrganizationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  order: ID
  faqAnswerID: ID
  faqQuestionID: ID
  organizationID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input FaqOrganizationInput {
  faqOrganizationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  order: ID
  faqAnswerID: ID
  faqQuestionID: ID
  organizationID: ID
  question: String 
  state: ObjectStatus
} 

extend type Query {
  faqOrganization(faqOrganizationID: ID!): FaqOrganization
  faqOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [FaqOrganization!]!
}

type Mutation {
  createFaqOrganization(input: FaqOrganizationInput!): FaqOrganization!
  updateFaqOrganization(faqOrganizationID: ID!, input: FaqOrganizationInput!): FaqOrganization!
  deleteFaqOrganization(faqOrganizationID: ID!): MutationResponse!
}

type Subscription {
  faqOrganizationAdded: FaqOrganization!
  faqOrganizationUpdated: FaqOrganization!
  faqOrganizationDeleted: FaqOrganization!
}
`;
