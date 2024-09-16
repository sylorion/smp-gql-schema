
export default /* GraphQL */`
# src/graphql/types/FilterInput.graphql

# Filtering input

input FilterInput {
  field: String
  value: String
  operator: String # Operators can include "=", "<", ">", etc.
}
`;
