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
  reviews(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Review!]!
}

### Attaching review to objects 
# Adding reviews to Users
extend type User {
  reviews(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Review!]
}

# Adding reviews to Services
extend type Service {
  reviews (
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Review!]
}

# Adding reviews to Organizations
extend type Organization {
  reviews(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Review!]
}

# Adding reviews to Comments
extend type Comment {
  reviews(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Review!]
}

### Stats criteria for objects
# Adding reviews to Users
extend type User {
  criteriaCount(forCriteriaID: ID): Int!
  sumCriteria(forCriteriaID: ID): Int!
}

# Adding reviews to Services
extend type Service {
  criteriaCount(forCriteriaID: ID): Int!
  sumCriteria(forCriteriaID: ID): Int!
}

# Adding reviews to Organizations
extend type Organization {
  criteriaCount(forCriteriaID: ID): Int!
  sumCriteria(forCriteriaID: ID): Int!
}

# Adding reviews to Comments
extend type Comment {
  criteriaCount(forCriteriaID: ID): Int!
  sumCriteria(forCriteriaID: ID): Int!
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
