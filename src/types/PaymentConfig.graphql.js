export default /* GraphQL */ `
# src/graphql/types/PaymentConfig.graphql.js

type PaymentConfig implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  paymentConfigID: ID!
  uniqRef: String!
  slug: String!
  authorID: ID
  paymentMethodID: ID
  partnerTokenAuthDetails: JSON
  paymentConfigDetails: JSON
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreatePaymentConfigInput {
  authorID: ID!
  paymentMethodID: ID
  partnerTokenAuthDetails: JSON
  paymentConfigDetails: JSON
  state: ObjectStatus
}

input UpdatePaymentConfigInput {
  authorID: ID!
  paymentMethodID: ID
  partnerTokenAuthDetails: JSON
  paymentConfigDetails: JSON
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
  createPaymentConfig(input: CreatePaymentConfigInput!): PaymentConfig!
  updatePaymentConfig(paymentConfigID: ID!, input: UpdatePaymentConfigInput!): PaymentConfig!
  deletePaymentConfig(paymentConfigID: ID!): MutationResponse!
}

extend type Subscription {
  paymentConfigAdded: PaymentConfig!
  paymentConfigUpdated: PaymentConfig!
  paymentConfigDeleted: PaymentConfig!
}
`;
