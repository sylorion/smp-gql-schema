
export default `
# src/graphql/types/MutationError.graphql

# Custom error type for handling potential errors during mutations

type MutationError {
  message: String!
  field: String
  code: Int
}

# For operation requiring a state only
type MutationResponse {
  success: Boolean!
  errors: [MutationError!]
  code: Int
}
`;
