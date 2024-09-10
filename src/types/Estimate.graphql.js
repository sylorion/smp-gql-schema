export default `
# src/graphql/types/Estimate.graphql.js

type Estimate implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  estimateID: ID!
  uniqRef: String
  slug: String
  authorID: ID!
  operatorUserID: ID
  buyerOrganizationID: ID
  sellerOrganizationID: ID
  serviceID: ID
  expirationDueDate: Date
  expirationTimeLeft: Int # in seconds
  referencePrice: Int
  previewPrice: Int
  proposedPrice: Int
  commentaire: String
  negociatedPrice: Int
  discountID: ID
  details: String
  propositionCount: Int
  lastProposition: ID
  stage: EstimateStage
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateEstimateInput {
  authorID: ID!
  operatorUserID: ID
  buyerOrganizationID: ID
  sellerOrganizationID: ID
  serviceID: ID
  expirationDueDate: Date
  expirationTimeLeft: Int
  referencePrice: Int
  previewPrice: Int
  proposedPrice: Int
  commentaire: String
  negociatedPrice: Int
  discountID: ID
  details: String
  stage: EstimateStage
  state: ObjectStatus
}

input UpdateEstimateInput {
  estimateID: ID!
  operatorUserID: ID
  serviceID: ID
  expirationDueDate: Date
  expirationTimeLeft: Int
  referencePrice: Int
  previewPrice: Int
  proposedPrice: Int
  commentaire: String
  negociatedPrice: Int
  discountID: ID
  details: String
  stage: EstimateStage
  state: ObjectStatus
}

type MutationResponse {
  success: Boolean!
  message: String
  estimate: Estimate
}

extend type Query {
  estimate(estimateID: ID!): Estimate
  estimates(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Estimate!]!
}

type Mutation {
  createEstimate(input: CreateEstimateInput!): Estimate!
  updateEstimate(estimateID: ID!, input: UpdateEstimateInput!): Estimate!
  deleteEstimate(estimateID: ID!): MutationResponse!
}

type Subscription {
  estimateAdded: Estimate!
  estimateUpdated: Estimate!
  estimateDeleted: Estimate!
}
`;
