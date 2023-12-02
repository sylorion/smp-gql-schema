export default `
# src/graphql/types/DevisAsset.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
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

type DevisAssetResponse  {
  data: [DevisAsset!]
  errors: [MutationError!]
}

extend type Query {
  devisAsset(devisAssetID: ID!): DevisAssetResponse
  devisAssets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): DevisAssetResponse
}

type Mutation {
  createDevisAsset(input: DevisAssetInput!): DevisAssetResponse!
  updateDevisAsset(devisAssetID: ID!, input: DevisAssetInput!): DevisAssetResponse!
  deleteDevisAsset(devisAssetID: ID!): MutationResponse!
}

type Subscription {
  devisAssetAdded: DevisAsset!
  devisAssetUpdated: DevisAsset!
  devisAssetDeleted: DevisAsset!
}
`;
