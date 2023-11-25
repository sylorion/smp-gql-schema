export default `
# src/graphql/types/Service.graphql.js

interface ServicesEntity {
  uniqRef: String # Mostly hand generated ID except for mongodb data
}

interface ServicesNavigableEntity{
  slug: String
}

interface ServicesStatable {
  state: ObjectStatus
}

type Service implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  serviceID: ID!
  uniqRef: String
  slug: String
  author: User
  title: String
  description: String
  mediaBannerID: ID
  termsAndConditionsID: ID
  parentID: ID
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
  supplyType: ServiceSupplyForm
  uptakeForm: ServiceUptakeType
  billingPlan: ServiceBillingPlan
  onlineService: Boolean
  advancedAttributes: String
  state: ObjectStatus
}

type ServiceResponse implements FallibleResponse {
  data: [Service!]
  errors: [MutationError!]
}

extend type Query {
  service(serviceID: ID!): ServiceResponse
  services(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ServiceResponse
}

type Mutation {
  createService(input: ServiceInput!): ServiceResponse!
  updateServiceAttributes(serviceID: ID!, input: ServiceInput!): ServiceResponse!
  updateService(serviceID: ID!, input: ServiceInput!): ServiceResponse!
  deleteService(serviceID: ID!): MutationResponse!
}

type Subscription {
  serviceAdded: Service!
  serviceUpdated: Service!
  serviceDeleted: Service!
}
`;
