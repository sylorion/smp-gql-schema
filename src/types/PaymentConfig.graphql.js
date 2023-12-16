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

extend type Query {
  paymentConfig(paymentConfigID: ID!): PaymentConfig
  paymentConfigs(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [PaymentConfig!]!
}

type Mutation {
  createPaymentConfig(input: PaymentConfigInput!): PaymentConfig!
  updatePaymentConfig(paymentConfigID: ID!, input: PaymentConfigInput!): PaymentConfig!
  deletePaymentConfig(paymentConfigID: ID!): MutationResponse!
}

type Subscription {
  paymentConfigAdded: PaymentConfig!
  paymentConfigUpdated: PaymentConfig!
  paymentConfigDeleted: PaymentConfig!
}
`;
