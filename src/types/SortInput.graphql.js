export default `
# src/graphql/types/SortInput.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

# Sorting input
input SortInput  @shareable {
  field: String
  order: String # Consider using "ASC" and "DESC"
}
`;
