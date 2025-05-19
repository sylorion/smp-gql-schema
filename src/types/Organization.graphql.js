export default /* GraphQL */ `
# src/graphql/types/Organization.graphql.js

type Organization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  organizationID: ID!
  uniqRef: String!
  slug: String!
  state: ObjectStatus
  authorID: ID
  ownerID: ID
  orgRef: String
  sectorID: ID
  legalName: String
  brand: String
  sigle: String
  oSize: String
  juridicForm: String
  juridicCatLabel: String
  juridicCatCode: String
  currency: String
  legalUniqIdentifier: String
  vatNumber: String
  communityVATNumber: String
  capital: Float
  insuranceRef: String
  insuranceName: String
  activityStartedAt: DateTime
  activityEndedAt: DateTime
  description: String
  summary: String
  locationID: ID
  parentOrganizationID: ID
  advancedAttributes: JSON
  createdAt: DateTime
  updatedAt: DateTime
  # Media fields - IDs des OrganizationMedia
  smallLogoMediaID: ID  # ID de l'OrganizationMedia pour le petit logo
  bigLogoMediaID: ID    # ID de l'OrganizationMedia pour le grand logo
  bannerMediaID: ID     # ID de l'OrganizationMedia pour la bannière
  # Relation avec OrganizationMedia
  organizationMedia: [OrganizationMedia!]
}

input OrganizationInput {
  state: ObjectStatus
  authorID: ID
  ownerID: ID
  orgRef: String
  sectorID: ID
  legalName: String
  brand: String
  sigle: String
  oSize: String
  juridicForm: String
  juridicCatLabel: String
  juridicCatCode: String
  currency: String
  legalUniqIdentifier: String
  vatNumber: String
  communityVATNumber: String
  capital: Float
  insuranceRef: String
  insuranceName: String
  activityStartedAt: DateTime
  activityEndedAt: DateTime
  description: String
  summary: String
  locationID: ID
  parentOrganizationID: ID
  advancedAttributes: JSON
  # Media fields - IDs des OrganizationMedia
  smallLogoMediaID: ID
  bigLogoMediaID: ID
  bannerMediaID: ID
}

type OrganizationResponse {
  organization: Organization
  error: Error
}

type OrganizationsResponse {
  organizations: [Organization!]
  error: Error
}

extend type Query {
  organization(organizationID: ID!): OrganizationResponse
  organizations(pagination: PaginationInput, sort: SortInput, filter: [FilterInput!]): OrganizationsResponse
  organizationsByIDs(organizationIDs: [ID!]!): OrganizationsResponse
  organizationsBySlugs(slugs: [String!]!): OrganizationsResponse
  organizationByUniqRef(UniqRef: String!): OrganizationResponse
  organizationBySlug(Slug: String!): OrganizationResponse
}

extend type Mutation {
  createOrganization(input: OrganizationInput!): OrganizationResponse
  updateOrganization(organizationID: ID!, input: OrganizationInput!): OrganizationResponse
  deleteOrganization(organizationID: ID!): OrganizationResponse
}
`;
