export default `
# src/graphql/types/Follow.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
type Follow {
  followID: ID!
  authorID: ID
  followedEntity: FollowableEntity!
  followedID: ID! # Organization or Service
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input FollowInput {
  followID: ID!
  followedID: ID!
  followedEntity: FollowableEntity!
  state: ObjectStatus
}

type FollowResponse implements FaillibleResponse {
  data: [Follow!]
  errors: [MutationError!]
}

extend type Query {
  follow(followID: ID!): FollowResponse
  follows(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): FollowResponse
}

type Mutation {
  followService(serviceID: ID!): FollowResponse!
  followOrganization(organizationID: ID!): FollowResponse!
  updateFollowDetails(followID: ID!, input: FollowInput!): FollowResponse!
  unFollowService(serviceID: ID!): Boolean!
  unFollowOrganization(organizationID: ID!): Boolean!
}

type Subscription {
  FollowAdded: Follow!
  FollowUpdated: Follow!
  FollowDeleted: Follow!
}
`;
