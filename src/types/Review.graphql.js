export default `
# src/graphql/types/Review.graphql.js

type Review  implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  reviewID: ID!
  uniqRef: String
  slug: String
  serviceID: ID
  organizationID: ID
  authorID: ID!
  criteriaID: ID
  rating: Int
  commentID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input ReviewInput {
  reviewID: ID
  serviceID: ID
  organizationID: ID
  authorID: ID!
  criteriaID: ID
  rating: Int
  commentID: ID
  state: ObjectStatus
}

extend type Query {
  review(reviewID: ID!): Review
  reviewByID(reviewID: ID!): Review
  reviewByUUID(uuid: String!): Review!
  reviewBySlug(slug: String!): Review!
  reviewByService(serviceID: String!): Review!
  reviewsByIDs(ids: [ID!]!): [Review!]!
  reviewsByState(
    state: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Review!]!          
  reviewsByOrganization(
    organizationID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Review!]!
  reviewsByService(
    serviceID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Review!]!
  reviewsByCriteria(
    criteriaID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Review!]!
  reviewsByComment(
    commentID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Review!]!
  reviewsByAuthor(
    authorID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Review!]!
  reviews(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Review!]!
}

type Mutation {
  createReview(input: ReviewInput!): Review!
  updateReview(reviewID: ID!, input: ReviewInput!): Review!
  deleteReview(reviewID: ID!): MutationResponse!
}

type Subscription {
  reviewListing: Review!
  reviewDetails: Review!
  reviewAdded: Review!
  reviewUpdated: Review!
  reviewDeleted: Review!
}
`;
