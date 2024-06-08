export default `
# src/graphql/types/ResetPassword.graphql.js

 type Mutation {
  forgotPassword(email: String!): PasswordResetResponse!
  resetPassword(token: String!, newPassword: String!): PasswordResetResponse!
} 

# Réponse des mutations de réinitialisation de mot de passe

type PasswordResetResponse {
  success: Boolean
  message: String
}
`;