
export default `
# src/graphql/types/Organization.graphql.js
scalar JSON
type Organization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  organizationID: ID!
  uniqRef: String
  slug: String
  authorID: ID!
  ownerID: ID!
  author: User
  owner: User
  orgRef: String
  sectorID: ID! 
  legalName: String
  brand: String
  sigle: String
  smallLogo: Media
  bigLogo: Media
  banner: Media
  oSize: OrganizationEconomicSizeKind
  juridicForm: String
  juridicCatLabel: String
  juridicCatCode: String
  currency: ServicesAcceptedDevice
  legalUniqIdentifier: String
  vatNumber: String
  communityVATNumber: String
  capital: Int
  insuranceRef: String
  insuranceName: String
  activityStartedAt: Int
  activityEndedAt: Int
  description: String
  summary: String
  location:  Place
  locationID: ID #Place
  parentOrganization: Organization
  parentOrganizationID: ID
  advancedAttributes: JSON
  state: ObjectStatus
  createdAt: Int
  updatedAt: Int
  deletedAt: Int
}

extend type User {
  #Owned organization or pined
  organization: Organization! # Pined favorite organization
  organizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Organization!]
}

# Input types for CRUD operations

input OrganizationInput {
  organizationID: ID
  authorID: Int
  ownerID: Int
  orgRef: String
  sectorID: Int
  legalName: String
  brand: String
  sigle: String
  smallLogoID: ID
  bigLogoID: ID
  bannerID: ID
  oSize: OrganizationEconomicSizeKind
  juridicForm: String
  juridicCatLabel: String
  juridicCatCode: String
  currency: ServicesAcceptedDevice
  legalUniqIdentifier: String
  vatNumber: String
  communityVATNumber: String
  capital: Int
  insuranceRef: String
  insuranceName: String
  activityStartedAt: Int
  activityEndedAt: Int
  description: String
  summary: String
  locationID: ID
  parentOrganizationID: ID
  advancedAttributes: String
  state: ObjectStatus
}

# Mutation responses for CRUD operations

type OrganizationResponse implements FallibleResponse {
  data: [Organization!]
  errors: [MutationError!]
}

extend type Query {
  getOrganization(id: ID!): OrganizationResponse
  listOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): OrganizationResponse
}

type Mutation {
  createOrganization(input: OrganizationInput!): OrganizationResponse!
  updateOrganization(id: ID!, input: OrganizationInput!): OrganizationResponse!
  deleteOrganization(id: ID!): MutationResponse!
}

type Subscription {
  organizationAdded: Organization!
  organizationUpdated: Organization!
  organizationDeleted: Organization!
}
`;
