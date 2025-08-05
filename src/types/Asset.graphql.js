export default  /* GraphQL */`
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
  conflictingAssets: JSON
  applyableAssets: JSON
  details: JSON
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
  medias: [AssetMedia!]
}

type AssetMedia {
  assetMediaID: ID!
  assetID: ID!
  mediaID: ID!
  listingPosition: Int!
  legend: String
  state: ObjectStatus
  media: Media!
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateAssetInput {
  title: String!
  stockQuantity: Int
  organizationID: ID
  mediaID: ID
  description: String
  price: Int!
  legalVatPercent: Int
  quantity: Int!
  maxPerReservation: Int
  conflictingAssets: JSON
  applyableAssets: JSON
  details: JSON
  state: ObjectStatus!
}

input UpdateAssetInput {
  title: String
  stockQuantity: Int
  mediaID: ID
  description: String
  price: Int
  legalVatPercent: Int
  quantity: Int
  maxPerReservation: Int
  conflictingAssets: JSON
  applyableAssets: JSON
  details: JSON
  state: ObjectStatus
}

input CreateAssetMediaInput {
  assetID: ID!
  mediaID: ID!
  listingPosition: Int!
  legend: String
  state: ObjectStatus!
}

input UpdateAssetMediaInput {
  listingPosition: Int
  legend: String
  state: ObjectStatus
}

extend type Query {
  asset(assetID: ID!): Asset
  assets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Asset!]!,
  assetBySlug(Slug: String!): Asset,
  assetsByIDs(assetIDs: [ID!]!): [Asset!]!,
  assetsBySlugs(slugs: [String!]!): [Asset!]!
  assetByUniqRef(uniqRef: String!): Asset
  # AssetMedia queries
  assetMedia(assetMediaID: ID!): AssetMedia
  assetMedias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [AssetMedia!]!
  assetMediasByIDs(assetMediaIDs: [ID!]!): [AssetMedia!]!
}

type Mutation {
  createAsset(input: CreateAssetInput!): Asset!
  updateAsset(assetID: ID!, input: UpdateAssetInput!): Asset!
  deleteAsset(assetID: ID!): MutationResponse!
  # AssetMedia mutations
  createAssetMedia(input: CreateAssetMediaInput!): AssetMedia!
  updateAssetMedia(assetMediaID: ID!, input: UpdateAssetMediaInput!): AssetMedia!
  deleteAssetMedia(assetMediaID: ID!): MutationResponse!
}


`;
