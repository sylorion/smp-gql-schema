export default /* GraphQL */ `
# src/graphql/types/MemberOrganization.graphql.js

type MemberOrganization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  memberOrganizationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  userID: ID
  organizationID: ID
  role: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
  organization: Organization
  user: User
}

input CreateMemberOrganizationInput {
  userID: ID!
  organizationID: ID!
  role: String
  state: ObjectStatus
}

input UpdateMemberOrganizationInput {
  userID: ID
  organizationID: ID
  role: String
  state: ObjectStatus
}

type RemoveInvitationResponse {
  success: Boolean!
  message: String
}

extend type Query {
  memberOrganization(memberOrganizationID: ID!): MemberOrganization
  memberOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [MemberOrganization!]!
  memberOrganizationBySlug(Slug: String!): MemberOrganization
  memberOrganizationsByIDs(memberOrganizationIDs: [ID!]!): [MemberOrganization!]!
  memberOrganizationsBySlugs(slugs: [String!]!): [MemberOrganization!]!
  memberOrganizationByUniqRef(uniqRef: String!): MemberOrganization
  getUserOrganizations(userID: ID!): [OrganizationsByUserResponse!]!
}

type Mutation {
  createMemberOrganization(input: CreateMemberOrganizationInput!): MemberOrganization!
  updateMemberOrganization(memberOrganizationID: ID!, input: UpdateMemberOrganizationInput!): MemberOrganization!
  deleteMemberOrganization(memberOrganizationID: ID!): MutationResponse!
  removeInvitation(input: RemoveInvitationInput!): RemoveInvitationResponse!
}

input RemoveInvitationInput {
  email: String!
  organizationID: ID!
}
`; 