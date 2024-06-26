export default `
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

input TransactionInput {
  transactionID: ID
  buyerUserID: ID
  sellerOrganizationID: ID
  invoiceID: ID
  totalAmount: Int
  dealMediaProofID: ID
  transactionDateTime: DateTime
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
  createTransaction(input: TransactionInput!): Transaction!
  updateTransaction(transactionID: ID!, input: TransactionInput!): Transaction!
  deleteTransaction(transactionID: ID!): MutationResponse!
}

type Subscription {
  transactionListing:   Transaction!
  transactionAdded:   Transaction!
  transactionUpdated: Transaction!
  transactionDeleted: Transaction!
}
`;
