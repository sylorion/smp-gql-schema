
export default `
# src/graphql/types/PaginationInput.graphql

# Pagination input
input PaginationInput @shareable {
  limit: Int
  offset: Int
}
`;
