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

extend type Query {
  paymentMethod(paymentMethodID: ID!): PaymentMethod 
  paymentMethods(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [PaymentMethod!]!
}

type Mutation {
  createPaymentMethod(input: PaymentMethodInput!): PaymentMethod!
  updatePaymentMethodDetails(paymentMethodID: ID!, input: PaymentMethodInput!):PaymentMethod!
  updatePaymentMethod(paymentMethodID: ID!, input: PaymentMethodInput!): PaymentMethod!
  deletePaymentMethod(paymentMethodID: ID!): MutationResponse!
}

type Subscription {
  paymentMethodAdded: PaymentMethod!
  paymentMethodUpdated: PaymentMethod!
  paymentMethodDeleted: PaymentMethod!
}
`;
