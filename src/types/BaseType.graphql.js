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

  directive @authorization(
    roles:  [[SMPAuthzRole!]!]!, 
    scopes: [[SMPAuthzScope!]!]!, 
    else:   SMPAuthzFailure
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | SCALAR | ENUM

  scalar SMPAuthzRole
  scalar SMPAuthzScope
  enum SMPAuthzFailure { 
    THROW, 
    INFO, 
    WARN,
    }

scalar Date
scalar JSON
scalar File
scalar DateTime
scalar Date
scalar URL
scalar Email
scalar PhoneNumber

interface ServicesEntity {
  uniqRef: String # Mostly hand generated ID except for mongodb data
}
interface ServicesNavigableEntity {
  slug: String
}
interface ServicesStatable {
  state: ObjectStatus
}

`