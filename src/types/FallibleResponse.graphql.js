export default `
# src/graphql/types/FallibleResponse.graphql

union QueryResult = ServiceAttribute | Follow |
Organization | Media | User | Asset | Application |
AuditLog | Criteria | Devis | DevisAsset | Discount | DocFaq | Invoice | OrganizationMedia |
PaymentMethod | PaymentConfig |Profile | Review | Service | ServiceAsset | ServiceMedia |
Topic | Tag | Comment | Transaction | TermsAndConditions |
UserOrganization | UserPreferences | UserRole |Role | Place | UserToken

interface FallibleResponse {
  data: [QueryResult!]
  errors: [MutationError!]
}
`;
