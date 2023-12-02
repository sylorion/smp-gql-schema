export default `
# src/graphql/types/SortInput.graphql.js

# Sorting input
input SortInput  @shareable {
  field: String
  order: String # Consider using "ASC" and "DESC"
}
`;
