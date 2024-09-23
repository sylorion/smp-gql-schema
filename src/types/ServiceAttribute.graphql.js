export default /* GraphQL */ `
# src/graphql/types/ServiceAttribute.graphql.js

type ServiceAttribute implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  serviceAttributeID: ID!
  uniqRef: String
  slug: String
  
  attributeName: String
  attributeValue: String
  serviceID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateServiceAttributeInput {
  
  attributeName: String!
  attributeValue: String!
  serviceID: ID!
  state: ObjectStatus
}

input UpdateServiceAttributeInput {
  
  attributeName: String
  attributeValue: String
  serviceID: ID
  state: ObjectStatus
}

extend type Query {
  serviceAttribute(serviceAttributeID: ID!): ServiceAttribute
  serviceAttributes(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [ServiceAttribute!]!
  serviceAttributeBySlug(Slug: String!): ServiceAttribute
  serviceAttributesByIDs(serviceAttributeIDs: [ID!]!): [ServiceAttribute!]!
  serviceAttributesBySlugs(slugs: [String!]!): [ServiceAttribute!]!
  serviceAttributeByUniqRef(UniqRef: String!): ServiceAttribute
}

type Mutation {
  createServiceAttribute(input: CreateServiceAttributeInput!): ServiceAttribute!
  updateServiceAttribute(serviceAttributeID: ID!, input: UpdateServiceAttributeInput!): ServiceAttribute!
  deleteServiceAttribute(serviceAttributeID: ID!): MutationResponse!
}


`;
