export default /* GraphQL */ `
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

input CreateFaqOrganizationInput {
  authorID: ID!
  order: ID
  faqAnswerID: ID
  faqQuestionID: ID
  organizationID: ID!
  state: ObjectStatus
}

input UpdateFaqOrganizationInput {
  authorID: ID!
  order: ID
  faqAnswerID: ID
  faqQuestionID: ID
  organizationID: ID
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
  createFaqOrganization(input: CreateFaqOrganizationInput!): FaqOrganization!
  updateFaqOrganization(faqOrganizationID: ID!, input: UpdateFaqOrganizationInput!): FaqOrganization!
  deleteFaqOrganization(faqOrganizationID: ID!): MutationResponse!
}

extend type Subscription {
  faqOrganizationAdded: FaqOrganization!
  faqOrganizationUpdated: FaqOrganization!
  faqOrganizationDeleted: FaqOrganization!
}
`;
