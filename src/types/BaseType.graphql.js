export default `
# src/graphql/types/BaseType.graphql.js

scalar Date
scalar JSON

interface ServicesEntity {
  uniqRef: String # Mostly hand generated ID except for mongodb data
}

interface ServicesNavigableEntity{
  slug: String
}

interface ServicesStatable {
  state: ObjectStatus
}

`