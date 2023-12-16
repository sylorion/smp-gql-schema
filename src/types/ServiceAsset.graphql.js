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

extend type Query {
  serviceAsset(serviceAssetID: ID!): ServiceAsset
  serviceAssets(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [ServiceAsset!]!
}

type Mutation {
  createServiceAsset(input: ServiceAssetInput!): ServiceAsset!
  updateServiceAsset(serviceAssetID: ID!, input: ServiceAssetInput!): ServiceAsset!
  deleteServiceAsset(serviceAssetID: ID!): MutationResponse!
}

type Subscription {
  serviceAssetAdded: ServiceAsset!
  serviceAssetUpdated: ServiceAsset!
  serviceAssetDeleted: ServiceAsset!
}
`;
