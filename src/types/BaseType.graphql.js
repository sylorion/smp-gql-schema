/**
 * GraphQL schema definition for the base types and directives used in the subgraph schemas.
 *
 * @file /Users/smpceo/Documents/smp/smp-gql-schema/src/types/BaseType.graphql.js
 * @description This file contains the base GraphQL types, scalars, and directives required for the subgraph schemas.
 *
 * @typedef {Object} BaseType
 * @property {scalar} link__Import - Scalar type for link import.
 * @property {directive} @link - Directive for linking external schemas.
 * @property {directive} @authorization - Directive for specifying access control rules.
 * @property {scalar} SMPAuthzRole - Scalar type for application login roles.
 * @property {scalar} SMPAuthzScope - Scalar type for application login scopes.
 * @property {enum} SMPAuthzFailure - Enum type for authorization failure actions.
 * @property {scalar} Date - Scalar type for date.
 * @property {scalar} JSON - Scalar type for JSON.
 * @property {scalar} File - Scalar type for file.
 * @property {scalar} DateTime - Scalar type for date and time.
 * @property {scalar} URL - Scalar type for URL.
 * @property {scalar} Email - Scalar type for email.
 * @property {scalar} PhoneNumber - Scalar type for phone number.
 * @property {interface} ServicesEntity - Interface for service entities with a unique reference.
 * @property {interface} ServicesNavigableEntity - Interface for navigable service entities with a slug.
 * @property {interface} ServicesStatable - Interface for service entities with a state.
 */
export default /* GraphQL */ `
# src/graphql/types/BaseType.graphql.js
# Required for all subgraph schemas
scalar link__Import

directive @link(
  url: String!,
  import: [link__Import],
) repeatable on SCHEMA

extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3", import: ["@composeDirective", "@tag", "@shareable", "@key", "inacessible", "override"])
  # @link(url: "https://myspecs.dev/myDirective/v1.0", import: ["@myDirective", { name: "@anotherDirective", as: "@hello" }])

  """
  The @authorization directive is used to specify access control rules for fields, objects, interfaces, scalars, and enums.
  - roles: Specifies the roles required to access the field (e.g. ADMIN, ANALYST, ACCOUNTING etc.).
  - scopes: Specifies the scopes required to access the field (e.g. SMP, ORG, etc.).
  - else: Specifies the action to take if the authorization fails.
  """
  directive @authorization(
    roles:  [[SMPAuthzRole!]!]!, 
    scopes: [[SMPAuthzScope!]!]!, 
    else:   SMPAuthzFailure
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | SCALAR | ENUM

  """
  Scalar type for user/app login roles.
  """
  scalar SMPAuthzRole

  """
  Scalar type for user/app login scopes.
  """
  scalar SMPAuthzScope

  """
  Enum type for authorization failure actions.
  """
  enum SMPAuthzFailure { 
    THROW, 
    INFO, 
    WARN,
    }

  """
  Scalar type for JSON.
  """
  scalar JSON
  """
  Scalar type for file.
  """
  scalar File
  """
  Scalar type for date and time.
  """
  scalar DateTime
  """
  Scalar type for date.
  """
  scalar Date
  """
  Scalar type for URL.
  """
  scalar URL
  """
  Scalar type for email.
  """
  scalar Email
  """
  Scalar type for phone number.
  """
  scalar PhoneNumber

  """
  Interface for service entities with a unique reference.
  """
  interface ServicesEntity {
    uniqRef: String # Mostly hand generated ID except for mongodb data
  }

  """
  Interface for navigable service entities with a slug.
  """
  interface ServicesNavigableEntity {
    slug: String
  } 

  """
  Interface for service entities with a state.
  """
  interface ServicesStatable {
    state: ObjectStatus
  }

`