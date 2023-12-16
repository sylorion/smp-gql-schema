export default `
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

input CommentInput {
  commentID: ID
  content: String
  authorID: ID
  serviceID: ID
  organizationID: ID
  feedback: Int
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

# Adding comments to Users
# TODO to be move to the gateway, user type unknown here 
extend type User {
  comments(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Comment!]
}

# Adding comments to Services
# TODO to be move to the gateway, service type unknown here
extend type Service {
  comments(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Comment!]
}

# Adding comments to Organizations
# TODO to be move to the gateway, organization type unknown here
extend type Organization {
  comments(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Comment!]
}

type Mutation {
  createComment(input: CommentInput!): Comment!
  updateComment(commentID: ID!, input: CommentInput!): Comment!
  deleteComment(commentID: ID!): MutationResponse!
}

type Subscription {
  commentAdded: Comment!
  commentUpdated: Comment!
  commentDeleted: Comment!
}
`;
