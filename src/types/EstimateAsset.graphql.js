export default /* GraphQL */ `
# src/graphql/types/EstimateAsset.graphql.js

type EstimateAsset implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  estimateAssetID: ID!
  uniqRef: String
  slug: String!
  legend: String
  assetID: ID
  estimateID: ID
  
  mandadtry: Boolean
  initialPrice: Int
  quantity: Int
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateEstimateAssetInput {
  legend: String!
  assetID: ID!
  estimateID: ID!
  
  mandadtry: Boolean
  initialPrice: Int
  quantity: Int
  state: ObjectStatus
}

input UpdateEstimateAssetInput {
  legend: String!
  assetID: ID
  estimateID: ID
  state: ObjectStatus
}

extend type Query {
  estimateAsset(estimateAssetID: ID!): EstimateAsset
  estimateAssets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [EstimateAsset!]!,
  estimateAssetBySlug(Slug: String!): EstimateAsset
  estimateAssetsByIDs(estimateAssetIDs: [ID!]!): [EstimateAsset!]!
  estimateAssetsBySlugs(slugs: [String!]!): [EstimateAsset!]!
  estimateAssetByUniqRef(uniqRef: String!): EstimateAsset
}

type Mutation {
  createEstimateAsset(input: CreateEstimateAssetInput!): EstimateAsset!
  updateEstimateAsset(estimateAssetID: ID!, input: UpdateEstimateAssetInput!): EstimateAsset!
  deleteEstimateAsset(estimateAssetID: ID!): MutationResponse!
}


`;
