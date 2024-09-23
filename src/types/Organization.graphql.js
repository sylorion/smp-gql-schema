export default /* GraphQL */ `
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
  currency: String
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
  locationID: ID
  parentOrganizationID: ID
  advancedAttributes: JSON
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateOrganizationInput {
  authorID: Int!
  ownerID: Int
  orgRef: String
  sectorID: Int
  legalName: String!
  brand: String
  sigle: String
  smallLogoID: ID
  bigLogoID: ID
  bannerID: ID
  oSize: OrganizationEconomicSizeKind
  juridicForm: String
  juridicCatLabel: String
  juridicCatCode: String
  currency: String
  legalUniqIdentifier: String
  vatNumber: String
  communityVATNumber: String
  capital: Int
  insuranceRef: String
  insuranceName: String
  activityStartedAt: Int
  activityEndedAt: Int
  description: String!
  summary: String
  locationID: ID
  parentOrganizationID: ID
  advancedAttributes: JSON
  state: ObjectStatus
}

input UpdateOrganizationInput {
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
  currency: String
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
  advancedAttributes: JSON
  state: ObjectStatus
}

extend type Query {
  organization(organizationID: ID!): Organization
  organizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Organization!]!
  organizationBySlug(Slug: String!): Organization
  organizationsByIDs(organizationIDs: [ID!]!): [Organization!]!
  organizationsBySlugs(slugs: [String!]!): [Organization!]!
  organizationByUniqRef(UniqRef: String!): Organization
}

type Mutation {
  createOrganization(input: CreateOrganizationInput!): Organization!
  updateOrganization(organizationID: ID!, input: UpdateOrganizationInput!): Organization!
  deleteOrganization(organizationID: ID!): Boolean!
}


`;
