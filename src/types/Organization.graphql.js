
export default `
# src/graphql/types/Organization.graphql.js

type Organization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  organizationID: ID!
  uniqRef: String
  slug: String
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
  activityStartedAt: String
  activityEndedAt: String
  description: String
  summary: String
  locationID: ID #Place
  parentOrganizationID: ID
  advancedAttributes: JSON
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

extend type User {
  #Owned organization or pined
  organization(organizationID: ID!): Organization!
  organizationID(organizationID: ID!): Organization!
  organizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Organization!]
  organizationsIDs(
    ids:[ID!]!,
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
extend type Query {
  organization(organizationID: ID!): Organization
  organizationByID(organizationID: ID!): Organization
  organizationByUUID(uuid: String!): Organization!
  organizationBySlug(slug: String!): Organization! 
  organizationByIDs(ids: [ID!]!): [Organization!]!
  organizationsByState(
    state: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Organization!]!
  organizationsByLocation(
    location:  ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Organization!]!
  organizationsByOwner(
    ownerID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Organization!]!
  organizationByAuthor(
    authorID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Organization!]!
  organizationBySector(
    sectorID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Organization!]!
  organizationBySize(
    organizationSize: OrganizationEconomicSizeKind!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Organization!]!
  organizationByCurrency(
    currency: ServicesAcceptedDevice!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Organization!]!
  organizationByUniqIdentifier(
    identifier: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Organization!]!
  organizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Organization!]!
}

type Mutation {
  createOrganization(input: OrganizationInput!): Organization!
  updateOrganization(organizationID: ID!, input: OrganizationInput!): Organization!  
  deleteOrganization(organizationID: ID!): Boolean!
}

type Subscription {
  organizationListing: Organization!
  organizationDetails: Organization!
  organizationAdded: Organization!
  organizationUpdated: Organization!
  organizationDeleted: Organization!
}
`;
