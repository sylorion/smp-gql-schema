export default /* GraphQL */ `
# src/graphql/types/Service.graphql.js

type Service implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  serviceID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  title: String
  description: String
  mediaBannerID: ID
  termsAndConditionsID: ID
  parentServiceID: ID
  parent: Service
  topicID: ID
  organizationID: ID
  locationID: ID
  paymentConfigID: ID
  price: Int!
  legalVatPercent: Int
  lowerPrice: Int
  upperPrice: Int
  negotiable: Boolean
  perimeter: Int
  supplyType: ServiceSupplyForm
  uptakeForm: ServiceUptakeType
  billingPlan: ServiceBillingPlan
  onlineService: Boolean
  advancedAttributes: JSON
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateServiceInput {
  authorID: ID!
  title: String!
  description: String!
  mediaBannerID: ID
  termsAndConditionsID: ID
  parentServiceID: ID
  topicID: ID
  organizationID: ID
  locationID: ID
  paymentConfigID: ID
  price: Int!
  legalVatPercent: Int!
  lowerPrice: Int!
  upperPrice: Int!
  negotiable: Boolean
  perimeter: Int
  attributes: [CreateServiceAttributeInput]
  supplyType: ServiceSupplyForm
  uptakeForm: ServiceUptakeType
  billingPlan: ServiceBillingPlan
  onlineService: Boolean
  advancedAttributes: JSON
  state: ObjectStatus!
}

input UpdateServiceInput {
  title: String
  description: String
  mediaBannerID: ID
  termsAndConditionsID: ID
  parentServiceID: ID
  topicID: ID
  locationID: ID
  paymentConfigID: ID
  price: Int
  legalVatPercent: Int
  lowerPrice: Int
  upperPrice: Int
  negotiable: Boolean
  perimeter: Int
  attributes: [UpdateServiceAttributeInput]
  supplyType: ServiceSupplyForm
  uptakeForm: ServiceUptakeType
  billingPlan: ServiceBillingPlan
  onlineService: Boolean
  advancedAttributes: JSON
  state: ObjectStatus
}

input SearchServiceInput {
  searchTerm: String
}

extend type Query {
  service(serviceID: ID!): Service
  services(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Service!]!
  searchServices(input: SearchServiceInput!): [Service!]!
  serviceBySlug(Slug: String!): Service
  servicesByIDs(serviceIDs: [ID!]!): [Service!]!
  servicesBySlugs(slugs: [String!]!): [Service!]!
  serviceByUniqRef(UniqRef: String!): Service
}

type Mutation {
  createService(input: CreateServiceInput!): Service!
  updateService(serviceID: ID!, input: UpdateServiceInput!): Service!
  deleteService(serviceID: ID!): MutationResponse!
}


`;
