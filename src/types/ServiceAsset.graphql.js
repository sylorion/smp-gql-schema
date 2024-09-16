export default /* GraphQL */ `
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

input CreateServiceAssetInput {
  assetID: ID!
  serviceID: ID!
  legend: String
  authorID: ID!
  state: ObjectStatus
}

input UpdateServiceAssetInput {
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
  createServiceAsset(input: CreateServiceAssetInput!): ServiceAsset!
  updateServiceAsset(serviceAssetID: ID!, input: UpdateServiceAssetInput!): ServiceAsset!
  deleteServiceAsset(serviceAssetID: ID!): MutationResponse!
}

extend type Subscription {
  serviceAssetAdded: ServiceAsset!
  serviceAssetUpdated: ServiceAsset!
  serviceAssetDeleted: ServiceAsset!
}
`;
