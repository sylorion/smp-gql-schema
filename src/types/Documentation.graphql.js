export default `
# src/graphql/types/Documentation.graphql.js

type Documentation implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  documentationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  serviceID: ID
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

input DocumentationInput {
  documentationID: ID 
  authorID: ID
  serviceID: ID
  title: String
  level: Int
  order: Int
  description: String
  parentDocumentationID: ID
  state: ObjectStatus
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
  createDocumentation(input: DocumentationInput!): Documentation!
  updateDocumentation(documentationID: ID!, input: DocumentationInput!): Documentation!
  deleteDocumentation(documentationID: ID!): MutationResponse!
}

type Subscription {
  documentationAdded: Documentation!
  documentationUpdated: Documentation!
  documentationDeleted: Documentation!
}
`;
