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
  expirationTimeLeft: Int # in second
  referencePrice: Int
  previewPrice: Int
  proposedPrice: Int
  commentaire: String
  negociatedPrice: Int
  discountID: ID
  details: String
  stage: EstimateStage
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input EstimateInput {
  estimateID: ID
  authorID: ID!
  operatorUserID: ID
  buyerOrganizationID: ID
  sellerOrganizationID: ID
  serviceID: ID
  expirationDueDate: Date
  expirationTimeLeft: Int # in second
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

extend type Query {
  estimate(estimateID: ID!): EstimateAsset
  estimateList(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [EstimateAsset!]!
}

type Mutation {
  createEstimate(input: EstimateInput!): EstimateAsset!
  updateEstimate(estimateID: ID!, input: EstimateInput!): EstimateAsset!
  updateEstimateDetails(estimateID: ID!, input: EstimateInput!): EstimateAsset!
  deleteEstimate(estimateID: ID!): MutationResponse!
}

type Subscription {
  estimateAdded: Estimate!
  estimateUpdated: Estimate!
  estimateDeleted: Estimate!
}
`;
