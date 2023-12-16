export default `
# src/graphql/types/DevisAsset.graphql.js

type DevisAsset implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  devisAssetID: ID!
  uniqRef: String
  slug: String!
  legend: String
  assetID: ID
  devisID: ID
  authorID: ID!
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input DevisAssetInput {
  devisAssetID: ID
  legend: String
  assetID: ID
  devisID: ID
  authorID: ID!
  state: ObjectStatus
} 

extend type Query {
  devisAsset(devisAssetID: ID!): DevisAsset
  devisAssets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [DevisAsset!]!
}

type Mutation {
  createDevisAsset(input: DevisAssetInput!): DevisAsset!
  updateDevisAsset(devisAssetID: ID!, input: DevisAssetInput!): DevisAsset!
  deleteDevisAsset(devisAssetID: ID!): MutationResponse!
}

type Subscription {
  devisAssetAdded: DevisAsset!
  devisAssetUpdated: DevisAsset!
  devisAssetDeleted: DevisAsset!
}
`;
