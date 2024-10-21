export default /* GraphQL */ `
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
  methodDetails: JSON
  isDefault: Boolean
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreatePaymentMethodInput {
  
  organizationID: ID
  paymentMethodKind: PaymentMethodType!
  isActive: Boolean
  accountHolderName: String
  expirationDate: Date
  bankName: String
  cardNumber: String
  cardType: String
  methodDetails: JSON
  isDefault: Boolean
  state: ObjectStatus
}

input UpdatePaymentMethodInput {
  
  organizationID: ID
  paymentMethodKind: PaymentMethodType
  isActive: Boolean
  accountHolderName: String
  expirationDate: Date
  bankName: String
  cardNumber: String
  cardType: String
  methodDetails: JSON
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
  paymentMethodBySlug(Slug: String!): PaymentMethod
  paymentMethodsByIDs(paymentMethodIDs: [ID!]!): [PaymentMethod!]!
  paymentMethodsBySlugs(slugs: [String!]!): [PaymentMethod!]!
  paymentMethodByUniqRef(UniqRef: String!): PaymentMethod
}

type Mutation {
  createPaymentMethod(input: CreatePaymentMethodInput!): PaymentMethod!
  updatePaymentMethod(paymentMethodID: ID!, input: UpdatePaymentMethodInput!): PaymentMethod!
  deletePaymentMethod(paymentMethodID: ID!): Boolean!
}


`;
