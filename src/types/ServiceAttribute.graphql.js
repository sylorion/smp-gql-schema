export default /* GraphQL */ `
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

input CreateServiceAttributeInput {
  authorID: ID!
  attributeName: String!
  attributeValue: String!
  serviceID: ID!
  state: ObjectStatus
}

input UpdateServiceAttributeInput {
  authorID: ID!
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
}

type Mutation {
  createServiceAttribute(input: CreateServiceAttributeInput!): ServiceAttribute!
  updateServiceAttribute(serviceAttributeID: ID!, input: UpdateServiceAttributeInput!): ServiceAttribute!
  deleteServiceAttribute(serviceAttributeID: ID!): MutationResponse!
}

extend type Subscription {
  serviceAttributeAdded: ServiceAttribute!
  serviceAttributeUpdated: ServiceAttribute!
  serviceAttributeDeleted: ServiceAttribute!
}
`;
