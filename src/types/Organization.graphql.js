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
  smallLogo: ID  # ID de l'OrganizationMedia pour le petit logo
  bigLogo: ID    # ID de l'OrganizationMedia pour le grand logo
  banner: ID     # ID de l'OrganizationMedia pour la bannière
  # Media URLs
  smallLogoUrl: String  # URL du petit logo
  bigLogoUrl: String    # URL du grand logo
  bannerUrl: String     # URL de la bannière
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
  smallLogo: ID
  bigLogo: ID
  banner: ID
}

extend type Query {
  organization(organizationID: ID!): Organization
  organizations(pagination: PaginationInput, sort: SortInput, filter: [FilterInput!]): [Organization!]!
  organizationsByIDs(organizationIDs: [ID!]!): [Organization!]!
  organizationsBySlugs(slugs: [String!]!): [Organization!]!
  organizationByUniqRef(UniqRef: String!): Organization
  organizationBySlug(Slug: String!): Organization
}

extend type Mutation {
  createOrganization(input: OrganizationInput!): Organization
  updateOrganization(organizationID: ID!, input: OrganizationInput!): Organization
  deleteOrganization(organizationID: ID!): Organization
}
`;
