export default `
# src/graphql/types/ResetPassword.graphql.js

extend type Mutation {
  # Mutation pour demander la réinitialisation de mot de passe

  requestPasswordReset(email: String!): PasswordResetResponse!

  # Mutation pour réinitialiser le mot de passe avec le token reçu par email

  resetPassword(token: String!, newPassword: String!): PasswordResetResponse!
} 

# Réponse des mutations de réinitialisation de mot de passe
type PasswordResetResponse {
  success: Boolean!
  message: String
}
`;