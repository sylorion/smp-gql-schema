export default /* GraphQL */ `
# src/graphql/types/Service.graphql.js

extend type Place @key(fields: "placeID") {
  placeID: ID! @external  #  ce champ est géré par mu-location
  uniqRef: String! @external 
  slug: String! @external 
  authorID: ID @external 
  country: String @external 
  region: String @external 
  pstate: String @external 
  city: String @external 
  postalCode: String  @external 
  placeKind: PlaceKind  @external 
  addressLine1: String  @external 
  addressLine2: String  @external 
  coordinates: String  @external 
  state: ObjectStatus  @external 
  createdAt: DateTime  @external 
  updatedAt: DateTime  @external 
  deletedAt: DateTime  @external 
}

type Service  implements ServicesEntity & ServicesNavigableEntity & ServicesStatable @key(fields: "serviceID"){
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
  location: Place @requires(fields: "locationID")  # locationID pour récupérer Place
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
  state: ObjectStatus !
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
  deleteService(serviceID: ID!): Boolean!
}


`;
