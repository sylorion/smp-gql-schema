export default /* GraphQL */`
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

input CreateAuditLogInput {
  actionType: AuditLogActionType!
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

input UpdateAuditLogInput {
  # actionType: AuditLogActionType
  # userID: ID
  # userIP: String
  # userOS: String
  machineName: String
  applicationID: ID
  applicationVersion: String
  # actionDetails: String
  # clientDetails: String
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
  createAuditLog(input: CreateAuditLogInput!): AuditLog!
  updateAuditLog(auditLogID: ID!, input: UpdateAuditLogInput!): AuditLog!
  deleteAuditLog(auditLogID: ID!): MutationResponse!
}

type Subscription {
  auditLogAdded: AuditLog!
  auditLogUpdated: AuditLog!
  auditLogDeleted: AuditLog!
}
`;
