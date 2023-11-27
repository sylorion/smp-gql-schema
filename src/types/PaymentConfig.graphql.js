export default `
# src/graphql/types/PaymentConfig.graphql.js

type PaymentConfig implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  paymentConfigID: ID!
  uniqRef: String!
  slug: String!
  authorID: ID
  paymentMethodID: ID
  partnerTokenAuthDetails: String
  paymentConfigDetails: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input PaymentConfigInput {
  paymentConfigID: ID
  authorID: ID
  paymentMethodID: ID
  partnerTokenAuthDetails: String
  paymentConfigDetails: String
  state: ObjectStatus
}

type PaymentConfigResponse implements FaillibleResponse {
  data: [PaymentConfig!]
  errors: [MutationError!]
}

extend type Query {
  paymentConfig(paymentConfigID: ID!): PaymentConfigResponse
  paymentConfigs(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): PaymentConfigResponse
}

type Mutation {
  createPaymentConfig(input: PaymentConfigInput!): PaymentConfigResponse!
  updatePaymentConfig(paymentConfigID: ID!, input: PaymentConfigInput!): PaymentConfigResponse!
  deletePaymentConfig(paymentConfigID: ID!): MutationResponse!
}

type Subscription {
  paymentConfigAdded: PaymentConfig!
  paymentConfigUpdated: PaymentConfig!
  paymentConfigDeleted: PaymentConfig!
}
`;
