
export default `
# src/graphql/types/FilterInput.graphql
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
# Filtering input
input FilterInput {
  field: String
  value: String
  operator: String # Operators can include "=", "<", ">", etc.
}
`;
