export default `
# src/graphql/types/Devis.graphql.js

type Devis implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  devisID: ID!
  uniqRef: String
  slug: String
  author: User
  operatorUser: User
  buyerOrganization: Organization
  sellerOrganization: Organization
  service: Service
  expirationDueDate: Date
  expirationTimeLeft: Int # in second
  referencePrice: Int
  previewPrice: Int
  proposedPrice: Int
  commentaire: String
  negociatedPrice: Int
  discountID: ID
  details: String
  stage: DevisStage
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input DevisInput {
  devisID: ID
  authorID: ID!
  operatorUserID: ID
  buyerOrganizationID: ID
  sellerOrganizationID: ID
  serviceID: ID
  expirationDueDate: Date
  expirationTimeLeft: Int # in second
  referencePrice: Int
  previewPrice: Int
  proposedPrice: Int
  commentaire: String
  negociatedPrice: Int
  discountID: ID
  details: String
  stage: DevisStage
  state: ObjectStatus
}

type DevisResponse implements FallibleResponse {
  data: [Devis!]
  errors: [MutationError!]
}

extend type Query {
  devis(devisID: ID!): DevisResponse
  devisList(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): DevisResponse
}

type Mutation {
  createDevis(input: DevisInput!): DevisResponse!
  updateDevis(devisID: ID!, input: DevisInput!): DevisResponse!
  updateDevisDetails(devisID: ID!, input: DevisInput!): DevisResponse!
  deleteDevis(devisID: ID!): MutationResponse!
}

type Subscription {
  devisAdded: Devis!
  devisUpdated: Devis!
  devisDeleted: Devis!
}
`;
