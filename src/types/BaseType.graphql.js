export default `
# src/graphql/types/BaseType.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
scalar Date
scalar JSON
scalar File
scalar DateTime
scalar Date

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