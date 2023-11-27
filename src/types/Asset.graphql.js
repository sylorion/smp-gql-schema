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

type AssetResponse implements FaillibleResponse {
  data: [Asset!]
  errors: [MutationError!]
}

extend type Query {
  asset(assetID: ID!): AssetResponse
  assets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): AssetResponse
}

type Mutation {
  createAsset(input: AssetInput!): AssetResponse!
  updateAsset(assetID: ID!, input: AssetInput!): AssetResponse!
  deleteAsset(assetID: ID!): MutationResponse!
}

type Subscription {
  assetAdded: Asset!
  assetUpdated: Asset!
  assetDeleted: Asset!
}
`;
