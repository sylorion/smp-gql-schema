export default `
# src/graphql/types/FaillibleResponse.graphql
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
union QueryResult = ServiceAttribute | Follow |
Organization | Media | User | Asset | Application |
AuditLog | Criteria | Devis | DevisAsset | Discount | DocFaq | Invoice | OrganizationMedia |
PaymentMethod | PaymentConfig |Profile | Review | Service | ServiceAsset | ServiceMedia |
Topic | Tag | Comment | Transaction | TermsAndConditions |
UserOrganization | UserPreferences | UserRole |Role | Place | UserToken

interface FaillibleResponse {
  data: [QueryResult!]
  errors: [MutationError!]
}
`;
