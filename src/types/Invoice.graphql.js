export default /* GraphQL */ `
# src/graphql/types/Invoice.graphql.js

type Invoice implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  invoiceID: ID!
  uniqRef: String
  slug: String
  estimateID: ID
  thirdPartyFees: Int
  servicesFees: Int
  servicesVatPercent: Int
  prestationsVatPercent: Int
  totalAmount: Int
  sellerOrganizationID: ID
  paymentStatus: PaymentStatus
  emitDate: DateTime
  dueDate: DateTime
  digitalSignature: String
  
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateInvoiceInput {
  estimateID: ID
  thirdPartyFees: Int
  sellerOrganizationID: ID
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

input UpdateInvoiceInput {
  paymentStatus: PaymentStatus
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
  ): [Invoice!]!
  invoiceBySlug(Slug: String!): Invoice
  invoicesByIDs(invoiceIDs: [ID!]!): [Invoice!]!
  invoicesBySlugs(slugs: [String!]!): [Invoice!]!
  invoiceByUniqRef(uniqRef: String!): Invoice
}

type Mutation {
  createInvoice(input: CreateInvoiceInput!): Invoice!
  updateInvoice(invoiceID: ID!, input: UpdateInvoiceInput!): Invoice!
  deleteInvoice(invoiceID: ID!): MutationResponse!
}


`;
