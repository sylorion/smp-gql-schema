export default `
# src/graphql/types/Invoice.graphql.js

type Invoice implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  invoiceID: ID!
  uniqRef: String
  slug: String
  devisID: ID
  thirdPartyFees: Int
  servicesFees: Int
  servicesVatPercent: Int
  prestationsVatPercent: Int
  totalAmount: Int
  paymentStatus: PaymentStatus
  emitDate: DateTime
  dueDate: DateTime
  digitalSignature: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input InvoiceInput {
  invoiceID: ID
  devisID: ID
  thirdPartyFees: Int
  servicesFees: Int
  servicesVatPercent: Int
  prestationsVatPercent: Int
  totalAmount: Int
  paymentStatus: PaymentStatus
  emitDate: DateTime
  dueDate: DateTime
  digitalSignature: String
  state: ObjectStatus
} 

extend type Query {
  invoice(invoiceID: ID!): Invoice
  invoices(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): Invoice
}

type Mutation {
  createInvoice(input: InvoiceInput!): Invoice!
  updateInvoice(invoiceID: ID!, input: InvoiceInput!): Invoice!
  deleteInvoice(invoiceID: ID!): MutationResponse!
}

type Subscription {
  invoiceAdded: Invoice!
  invoiceUpdated: Invoice!
  invoiceDeleted: Invoice!
}
`;
