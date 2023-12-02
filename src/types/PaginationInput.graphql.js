
export default `
# src/graphql/types/PaginationInput.graphql
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

# Pagination input
input PaginationInput {
  limit: Int
  offset: Int
}
`;
