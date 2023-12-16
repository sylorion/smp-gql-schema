export default `
# src/graphql/types/Devis.graphql.js

type Devis implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  devisID: ID!
  uniqRef: String
  slug: String
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

extend type Query {
  devis(devisID: ID!): DevisAsset
  devisList(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [DevisAsset!]!
}

type Mutation {
  createDevis(input: DevisInput!): DevisAsset!
  updateDevis(devisID: ID!, input: DevisInput!): DevisAsset!
  updateDevisDetails(devisID: ID!, input: DevisInput!): DevisAsset!
  deleteDevis(devisID: ID!): MutationResponse!
}

type Subscription {
  devisAdded: Devis!
  devisUpdated: Devis!
  devisDeleted: Devis!
}
`;
