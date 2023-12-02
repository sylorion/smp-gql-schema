export default `
# src/graphql/types/Transaction.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

type Transaction implements ServicesEntity & ServicesNavigableEntity & ServicesStatable  @key("transactionID") {
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

type TransactionResponse  {
  data: [Transaction!]
  errors: [MutationError!]
}

extend type Query {
  transaction(transactionID: ID!): TransactionResponse
  transactions(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): TransactionResponse
}

type Mutation {
  createTransaction(input: TransactionInput!): TransactionResponse!
  updateTransaction(transactionID: ID!, input: TransactionInput!): TransactionResponse!
  deleteTransaction(transactionID: ID!): MutationResponse!
}

type Subscription {
  transactionAdded:   Transaction!
  transactionUpdated: Transaction!
  transactionDeleted: Transaction!
}
`;
