export default `
# src/graphql/types/ServiceAttribute.graphql.js

type ServiceAttribute implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  serviceAttributeID: ID!
  uniqRef: String
  slug: String
  authorID: ID!
  attributeName: String
  attributeValue: String
  serviceID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

extend type Service {
  attributes: [ServiceAttribute!]!
}

input ServiceAttributeInput {
  serviceAttributeID: ID 
  authorID: ID!
  attributeName: String!
  attributeValue: String!
  serviceID: ID!
  state: ObjectStatus
}

extend type Query {
  serviceAttribute(serviceAttributeID: ID!): ServiceAttribute
  serviceAttributes(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [ServiceAttribute!]!
}

type Mutation {
  createServiceAttribute(input: ServiceAttributeInput!): ServiceAttribute!
  updateServiceAttribute(attributeID: ID!, input: ServiceAttributeInput!): ServiceAttribute!
  deleteServiceAttribute(attributeID: ID!): MutationResponse!
}

type Subscription {
  serviceAttributeAdded: ServiceAttribute!
  serviceAttributeUpdated: ServiceAttribute!
  serviceAttributeDeleted: ServiceAttribute!
}
`;
