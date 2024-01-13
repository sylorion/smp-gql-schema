export default `
# src/graphql/types/Asset.graphql.js

type Asset implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  assetID: ID!
  uniqRef: String
  slug: String
  title: String
  authorID: ID
  organizationID: ID
  mediaID: ID
  description: String
  price: Int
  legalVatPercent: Int
  quantity: Int
  stockQuantity: Int
  maxPerReservation: Int
  conflictingAssets: String
  applyableAssets: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input AssetInput {
  assetID: ID
  title: String
  authorID: ID!
  stockQuantity: Int
  organizationID: ID
  mediaID: ID
  description: String
  price: Int

  legalVatPercent: Int
  quantity: Int
  maxPerReservation: Int
  conflictingAssets: String
  applyableAssets: String
  state: ObjectStatus
}

extend type Query {
  asset(assetID: ID!): Asset
  assets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Asset!]!
}

type Mutation {
  createAsset(input: AssetInput!): Asset!
  updateAsset(assetID: ID!, input: AssetInput!): Asset!
  deleteAsset(assetID: ID!): MutationResponse!
}

type Subscription {
  assetListing: Asset!
  assetDetails: Asset!
  assetAdded: Asset!
  assetUpdated: Asset!
  assetDeleted: Asset!
}
`;
