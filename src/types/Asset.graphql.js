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
  conflictingAssets: String
  applyableAssets: String
  state: ObjectStatus
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
  conflictingAssets: String
  applyableAssets: String
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
  conflictingAssets: String
  applyableAssets: String
  state: ObjectStatus
}

type MutationResponse {
  success: Boolean!
  message: String
  asset: Asset
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
  assetByUniqRef(UniqRef: String!): Asset
}

type Mutation {
  createAsset(input: CreateAssetInput!): Asset!
  updateAsset(assetID: ID!, input: UpdateAssetInput!): Asset!
  deleteAsset(assetID: ID!): Boolean!
}


`;
