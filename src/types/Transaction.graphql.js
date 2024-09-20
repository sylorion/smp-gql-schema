export default /* GraphQL */ `
# src/graphql/types/Transaction.graphql.js

type Transaction implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  transactionID: ID!
  uniqRef: String
  slug: String
  buyerUserID: ID
  sellerOrganizationID: ID
  invoiceID: ID
  totalAmount: Int
  dealMediaProofID: ID
  transactionDateTime: DateTime
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateTransactionInput {
  buyerUserID: ID!
  sellerOrganizationID: ID!
  invoiceID: ID
  totalAmount: Int!
  dealMediaProofID: ID
  transactionDateTime: DateTime
  state: ObjectStatus
}

input UpdateTransactionInput {
  # buyerUserID: ID
  sellerOrganizationID: ID
  # invoiceID: ID
  # totalAmount: Int
  dealMediaProofID: ID
  state: ObjectStatus
}

extend type Query {
  transaction(transactionID: ID!): Transaction
  transactions(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Transaction!]!
}

type Mutation {
  createTransaction(input: CreateTransactionInput!): Transaction!
  updateTransaction(transactionID: ID!, input: UpdateTransactionInput!): Transaction!
  deleteTransaction(transactionID: ID!): MutationResponse!
}


`;
