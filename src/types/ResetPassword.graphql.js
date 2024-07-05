export default `
# src/graphql/types/ResetPassword.graphql.js

input ForgotPasswordInput {
  email: String!
}

input ResetPasswordInput {
  token: String!
  newPassword: String!
}

type PasswordResetResponse {
  success: Boolean!
  message: String
}

type Mutation {
  forgotPassword(email: String!): PasswordResetResponse
  resetPassword(input: ResetPasswordInput!): PasswordResetResponse!
}

`;