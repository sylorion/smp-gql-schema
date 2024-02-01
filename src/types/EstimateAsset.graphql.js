export default `
# src/graphql/types/EstimateAsset.graphql.js

type EstimateAsset implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  estimateAssetID: ID!
  uniqRef: String
  slug: String!
  legend: String
  assetID: ID
  estimateID: ID
  authorID: ID!
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input EstimateAssetInput {
  estimateAssetID: ID
  legend: String
  assetID: ID
  estimateID: ID
  authorID: ID!
  state: ObjectStatus
} 

extend type Query {
  estimateAsset(estimateAssetID: ID!): EstimateAsset
  estimateAssets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [EstimateAsset!]!
}

type Mutation {
  createEstimateAsset(input: EstimateAssetInput!): EstimateAsset!
  updateEstimateAsset(estimateAssetID: ID!, input: EstimateAssetInput!): EstimateAsset!
  deleteEstimateAsset(estimateAssetID: ID!): MutationResponse!
}

type Subscription {
  estimateAssetAdded: EstimateAsset!
  estimateAssetUpdated: EstimateAsset!
  estimateAssetDeleted: EstimateAsset!
}
`;
