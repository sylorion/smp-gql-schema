export default /* GraphQL */`
# src/graphql/types/ResetPassword.graphql.js


input ResetPasswordInput {
  token: String!
  newPassword: String!
}

type PasswordResetResponse {
  success: Boolean!
  message: String
}

type Mutation {
  resetPassword(input: ResetPasswordInput!): PasswordResetResponse!
}

`;