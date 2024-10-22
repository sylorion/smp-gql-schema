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


extend type Query {
  documentation(documentationID: ID!): Documentation
  documentations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Documentation!]!,
  documentationBySlug(Slug: String!): Documentation
  documentationsByIDs(documentationIDs: [ID!]!): [Documentation!]!
  documentationsBySlugs(slugs: [String!]!): [Documentation!]!
  documentationByUniqRef(uniqRef: String!): Documentation
}

type Mutation {
  createDocumentation(input: CreateDocumentationInput!): Documentation!
  updateDocumentation(documentationID: ID!, input: UpdateDocumentationInput!): Documentation!
  deleteDocumentation(documentationID: ID!): MutationResponse!
}


`;
