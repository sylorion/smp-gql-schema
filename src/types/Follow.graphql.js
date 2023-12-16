export default `
# src/graphql/types/Follow.graphql.js

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

extend type Query {
  follow(followID: ID!): Follow
  follows(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Follow!]!
}

type Mutation {
  followService(serviceID: ID!): Follow!
  followOrganization(organizationID: ID!): Follow!
  updateFollowDetails(followID: ID!, input: FollowInput!): Follow!
  unFollowService(serviceID: ID!): Boolean!
  unFollowOrganization(organizationID: ID!): Boolean!
}

type Subscription {
  FollowAdded: Follow!
  FollowUpdated: Follow!
  FollowDeleted: Follow!
}
`;
