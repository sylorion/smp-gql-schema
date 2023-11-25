export default `
# src/graphql/types/Comment.graphql.js

type Comment implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  commentID: ID!
  uniqRef: String
  slug: String
  content: String
  author: User
  authorID: ID!
  service: Service
  serviceID: ID
  organization: Organization
  organizationID: ID
  feedback: Int
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CommentInput {
  commentID: ID
  content: String
  authorID: ID
  serviceID: ID
  organizationID: ID
  feedback: Int
  state: ObjectStatus
}

type CommentResponse implements FallibleResponse {
  data: [Comment!]
  errors: [MutationError!]
}

extend type Query {
  comment(commentID: ID!): CommentResponse
  comments(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): CommentResponse
}

# Adding comments to Users
extend type User {
  comments(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Comment!]
}

# Adding comments to Services
extend type Service {
  comments(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Comment!]
}

# Adding comments to Organizations
extend type Organization {
  comments(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Comment!]
}

type Mutation {
  createComment(input: CommentInput!): CommentResponse!
  updateComment(commentID: ID!, input: CommentInput!): CommentResponse!
  deleteComment(commentID: ID!): MutationResponse!
}

type Subscription {
  commentAdded: Comment!
  commentUpdated: Comment!
  commentDeleted: Comment!
}
`;
