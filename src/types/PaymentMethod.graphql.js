export default `
# src/graphql/types/PaymentMethod.graphql.js

type PaymentMethod implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  paymentMethodID: ID!
  uniqRef: String!
  slug: String!
  authorID: ID
  organizationID: ID
  paymentMethodKind: PaymentMethodType
  isActive: Boolean
  accountHolderName: String
  expirationDate: Date
  bankName: String
  cardNumber: String
  cardType: String
  methodDetails: String
  isDefault: Boolean
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input PaymentMethodInput {
  paymentMethodID: ID
  authorID: ID
  organizationID: ID
  paymentMethodKind: PaymentMethodType
  isActive: Boolean
  accountHolderName: String
  expirationDate: Date
  pmUUID: String
  bankName: String
  cardNumber: String
  cardType: String
  methodDetails: String
  isDefault: Boolean
  state: ObjectStatus
}

type PaymentMethodResponse  {
  data: [PaymentMethod!]
  errors: [MutationError!]
}

extend type Query {
  paymentMethod(paymentMethodID: ID!): PaymentMethodResponse
  paymentMethods(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): PaymentMethodResponse
}

type Mutation {
  createPaymentMethod(input: PaymentMethodInput!): PaymentMethodResponse!
  updatePaymentMethodDetails(paymentMethodID: ID!, input: PaymentMethodInput!):PaymentMethodResponse!
  updatePaymentMethod(paymentMethodID: ID!, input: PaymentMethodInput!): PaymentMethodResponse!
  deletePaymentMethod(paymentMethodID: ID!): MutationResponse!
}

type Subscription {
  paymentMethodAdded: PaymentMethod!
  paymentMethodUpdated: PaymentMethod!
  paymentMethodDeleted: PaymentMethod!
}
`;
