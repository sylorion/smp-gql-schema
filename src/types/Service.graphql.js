export default `
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
  advancedAttributes: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input ServiceInput {
  serviceID: ID
  authorID: ID
  title: String
  description: String
  mediaBannerID: ID
  termsAndConditionsID: ID
  parentServiceID: ID
  topicID: ID
  organizationID: ID
  locationID: ID
  paymentConfigID: ID
  price: Int
  legalVatPercent: Int
  lowerPrice: Int
  upperPrice: Int
  negotiable: Boolean
  perimeter: Int
  attributes: [ServiceAttributeInput]
  supplyType: ServiceSupplyForm
  uptakeForm: ServiceUptakeType
  billingPlan: ServiceBillingPlan
  onlineService: Boolean
  advancedAttributes: String
  state: ObjectStatus
}
input SearchServiceInput {
  name: String
  startDate: String
  endDate: String
  minPrice: Float
  maxPrice: Float
  tag: Int
  topic: Int
}
extend type Query {
  service(serviceID: ID!): Service
  services(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Service!]!
}

type Mutation {
  createService(input: ServiceInput!): Service!
  updateServiceAttributes(serviceID: ID!, input: ServiceInput!): Service!
  updateService(serviceID: ID!, input: ServiceInput!): Service!
  deleteService(serviceID: ID!): MutationResponse!
}

type Subscription {
  serviceListing: Service!
  serviceDetail: Service!
  serviceAdded: Service!
  serviceUpdated: Service!
  serviceDeleted: Service!
}
`;
