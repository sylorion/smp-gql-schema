export default `
# src/graphql/types/AuditLog.graphql.js

type AuditLog implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  auditLogID: ID!
  uniqRef: String
  slug: String
  actionType: AuditLogActionType
  userID: ID
  userIP: String
  userOS: String
  machineName: String
  applicationID: ID
  applicationVersion: String
  actionDetails: String
  clientDetails: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input AuditLogInput {
  auditLogID: ID
  actionType: AuditLogActionType
  userID: ID
  userIP: String
  userOS: String
  machineName: String
  applicationID: ID
  applicationVersion: String
  actionDetails: String
  clientDetails: String
  state: ObjectStatus
}

extend type Query {
  auditLog(auditLogID: ID!): AuditLog
  auditLogs(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [AuditLog!]!
}

type Mutation {
  createAuditLog(input: AuditLogInput!): AuditLog!
  updateAuditLog(auditLogID: ID!, input: AuditLogInput!): AuditLog!
  deleteAuditLog(auditLogID: ID!): MutationResponse!
}

type Subscription {
  auditLogAdded: AuditLog!
  auditLogUpdated: AuditLog!
  auditLogDeleted: AuditLog!
}
`;
