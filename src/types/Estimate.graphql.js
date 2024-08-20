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
  propositionCount: Int
  lastProposition: ID
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
  estimate(estimateID: ID!): Estimate
  estimates(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Estimate!]!
}

type Mutation {
  createEstimate(input: EstimateInput!): Estimate!
  updateEstimate(estimateID: ID!, input: EstimateInput!): Estimate!
  updateEstimateDetails(estimateID: ID!, input: EstimateInput!): Estimate!
  deleteEstimate(estimateID: ID!): MutationResponse!
  negotiateEstimateRequest(input: NegotiateEstimateInput!): Estimate!
  negotiatePrice(input: NegotiatePriceInput!): Estimate!
  estimatePayment(estimateID: ID!, paymentInput: PaymentInput!): Estimate
  refundEstimatePayment(estimateID: ID!): Estimate
}

input PaymentInput {
  cardNumber: String!
  expDate: String!
  token: String!
  cvc: String!
}
input NegotiateEstimateInput {
  serviceID: ID!
  authorID: ID!
  operatorUserID: ID
  buyerOrganizationID: ID
  expirationDueDate: Date
  expirationTimeLeft: Int # in seconds
  comment: String
  stage: EstimateStage
  state: ObjectStatus
}
  input NegotiatePriceInput {
  estimateID: ID!
  proposedPrice: Int!
  lastProposition: ID!
}

type Subscription {
  estimateAdded: Estimate!
  estimateUpdated: Estimate!
  estimateDeleted: Estimate!
}
`;
