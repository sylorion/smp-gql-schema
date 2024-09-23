export default /* GraphQL */ `
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

input CreateFollowInput {
  
  followedID: ID!
  followedEntity: FollowableEntity!
  state: ObjectStatus
}

input UpdateFollowInput {
  authorID: ID
  followedID: ID
  followedEntity: FollowableEntity
  state: ObjectStatus
}

extend type Query {
  follow(followID: ID!): Follow
  follows(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Follow!]!,
  followBySlug(Slug: String!): Follow
  followsByIDs(followIDs: [ID!]!): [Follow!]!
  followsBySlugs(slugs: [String!]!): [Follow!]!
  followByUniqRef(UniqRef: String!): Follow
}

type Mutation {
  followService(serviceID: ID!): Follow!
  followOrganization(organizationID: ID!): Follow!
  updateFollowDetails(followID: ID!, input: UpdateFollowInput!): Follow!
  unFollowService(serviceID: ID!): Boolean!
  unFollowOrganization(organizationID: ID!): Boolean!
}


`;
