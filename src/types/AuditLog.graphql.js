export default `
# src/graphql/types/AuditLog.graphql.js

type AuditLog implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  auditLogID: ID!
  uniqRef: String
  slug: String
  actionType: AuditLogActionType
  user: User
  userIP: String
  userOS: String
  machineName: String
  application: Application
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

type AuditLogResponse implements FaillibleResponse {
  data: [AuditLog!]
  errors: [MutationError!]
}

extend type Query {
  auditLog(auditLogID: ID!): AuditLogResponse
  auditLogs(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): AuditLogResponse
}

type Mutation {
  createAuditLog(input: AuditLogInput!): AuditLogResponse!
  updateAuditLog(auditLogID: ID!, input: AuditLogInput!): AuditLogResponse!
  deleteAuditLog(auditLogID: ID!): MutationResponse!
}

type Subscription {
  auditLogAdded: AuditLog!
  auditLogUpdated: AuditLog!
  auditLogDeleted: AuditLog!
}
`;
