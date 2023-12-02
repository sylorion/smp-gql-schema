
export default `
# src/graphql/types/MutationError.graphql
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
# Custom error type for handling potential errors during mutations

type MutationError @shareable {
  message: String!
  field: String
  code: Int
}

# For operation requiring a state only
type MutationResponse @shareable {
  success: Boolean!
  errors: [MutationError!]
  code: Int
}
`;
