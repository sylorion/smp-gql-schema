export default `
# src/graphql/types/Review.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

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

type ReviewResponse  {
  data: [Review!]
  errors: [MutationError!]
}

extend type Query {
  review(reviewID: ID!): ReviewResponse
  reviews(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ReviewResponse
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
  reviews(
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
  createReview(input: ReviewInput!): ReviewResponse!
  updateReview(reviewID: ID!, input: ReviewInput!): ReviewResponse!
  deleteReview(reviewID: ID!): MutationResponse!
}

type Subscription {
  reviewAdded: Review!
  reviewUpdated: Review!
  reviewDeleted: Review!
}
`;
