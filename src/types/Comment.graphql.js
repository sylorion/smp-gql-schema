export default /* GraphQL */ `
# src/graphql/types/Comment.graphql.js

type Comment implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  commentID: ID!
  uniqRef: String
  slug: String
  content: String 
  authorID: ID
  serviceID: ID
  organizationID: ID
  feedback: Int
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateCommentInput {
  content: String!
  authorID: ID!
  serviceID: ID!
  organizationID: ID
  state: ObjectStatus
}

input UpdateCommentInput {
  content: String!
  authorID: ID!
  serviceID: ID
  organizationID: ID
  state: ObjectStatus
}

extend type Query {
  comment(commentID: ID!): Comment
  comments(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Comment!]!
}

type Mutation {
  createComment(input: CreateCommentInput!): Comment!
  updateComment(commentID: ID!, input: UpdateCommentInput!): Comment!
  deleteComment(commentID: ID!): MutationResponse!
  addFeedbackToComment(commentID: ID!, feedback: Int!): Comment!
}

extend type Subscription {
  commentAdded: Comment!
  commentUpdated: Comment!
  commentDeleted: Comment!
}
`;
