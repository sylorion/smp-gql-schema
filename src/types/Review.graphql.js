export default /* GraphQL */ `
# src/graphql/types/Review.graphql.js

type Review implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  reviewID: ID!
  uniqRef: String
  slug: String
  serviceID: ID
  organizationID: ID
  
  criteriaID: ID
  rating: Int
  commentID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateReviewInput {
  serviceID: ID
  organizationID: ID
  
  criteriaID: ID
  rating: Int
  commentID: ID
  state: ObjectStatus
}

input UpdateReviewInput {
  # serviceID: ID
  # organizationID: ID
  
  # criteriaID: ID
  rating: Int
  # commentID: ID
  state: ObjectStatus
}

extend type Query {
  review(reviewID: ID!): Review
  reviews(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Review!]!
  reviewBySlug(Slug: String!): Review
  reviewsByIDs(reviewIDs: [ID!]!): [Review!]!
  reviewsBySlugs(slugs: [String!]!): [Review!]!
  reviewByUniqRef(UniqRef: String!): Review
}

type Mutation {
  createReview(input: CreateReviewInput!): Review!
  updateReview(reviewID: ID!, input: UpdateReviewInput!): Review!
  deleteReview(reviewID: ID!): MutationResponse!
}


`;
