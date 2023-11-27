export default `
# src/graphql/types/ServiceAsset.graphql.js
type ServiceAsset implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  serviceAssetID: ID!
  uniqRef: String!
  slug: String
  assetID: ID
  serviceID: ID
  legend: String
  authorID: ID!
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input ServiceAssetInput {
  serviceAssetID: ID
  assetID: ID
  serviceID: ID
  legend: String
  authorID: ID!
  state: ObjectStatus
}

type ServiceAssetResponse implements FaillibleResponse {
  data: [ServiceAsset!]
  errors: [MutationError!]
}

extend type Query {
  serviceAsset(serviceAssetID: ID!): ServiceAssetResponse
  serviceAssets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ServiceAssetResponse
}

type Mutation {
  createServiceAsset(input: ServiceAssetInput!): ServiceAssetResponse!
  updateServiceAsset(serviceAssetID: ID!, input: ServiceAssetInput!): ServiceAssetResponse!
  deleteServiceAsset(serviceAssetID: ID!): MutationResponse!
}

type Subscription {
  serviceAssetAdded: ServiceAsset!
  serviceAssetUpdated: ServiceAsset!
  serviceAssetDeleted: ServiceAsset!
}
`;
