export default `
# src/graphql/types/ServiceAttribute.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
        
type ServiceAttribute implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  attributeID: ID!
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

input ServiceAttributeInput {
  attributeID: ID
  uniqRef: String!
  slug: String!
  authorID: ID!
  attributeName: String
  attributeValue: String
  serviceID: ID
  state: ObjectStatus
}

type ServiceAttributeResponse implements FaillibleResponse {
  data: [ServiceAttribute!]
  errors: [MutationError!]
}

extend type Query {
  serviceAttribute(attributeID: ID!): ServiceAttributeResponse
  serviceAttributes(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ServiceAttributeResponse
}

type Mutation {
  createServiceAttribute(input: ServiceAttributeInput!): ServiceAttributeResponse!
  updateServiceAttribute(attributeID: ID!, input: ServiceAttributeInput!): ServiceAttributeResponse!
  deleteServiceAttribute(attributeID: ID!): MutationResponse!
}

type Subscription {
  serviceAttributeAdded: ServiceAttribute!
  serviceAttributeUpdated: ServiceAttribute!
  serviceAttributeDeleted: ServiceAttribute!
}
`;
