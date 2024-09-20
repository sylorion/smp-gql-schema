export default /* GraphQL */`
# src/graphql/types/Documentation.graphql.js

type Documentation implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  documentationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  serviceID: ID
  organizationID: ID
  title: String
  level: Int
  order: Int
  description: String
  parentDocumentationID: ID 
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateDocumentationInput {
  
  serviceID: ID
  organizationID: ID
  title: String!
  level: Int
  order: Int
  description: String
  parentDocumentationID: ID
  state: ObjectStatus
}

input UpdateDocumentationInput {
  
  serviceID: ID
  organizationID: ID
  title: String
  level: Int
  order: Int
  description: String
  parentDocumentationID: ID
  state: ObjectStatus
}

type MutationResponse {
  success: Boolean!
  message: String
  documentation: Documentation
}

extend type Query {
  documentation(documentationID: ID!): Documentation
  documentations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Documentation!]!
}

type Mutation {
  createDocumentation(input: CreateDocumentationInput!): Documentation!
  updateDocumentation(documentationID: ID!, input: UpdateDocumentationInput!): Documentation!
  deleteDocumentation(documentationID: ID!): MutationResponse!
}


`;
