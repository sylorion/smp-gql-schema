export default /* GraphQL */`
# src/graphql/types/BaseType.graphql.js

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
directive @exclude on 
FIELD_DEFINITION | INPUT_FIELD_DEFINITION 
| UNION | INTERFACE | ENUM | OBJECT

directive @secure(hash: string, comment: string) on 
FIELD_DEFINITION | INPUT_FIELD_DEFINITION | UNION | INTERFACE | ENUM_VALUE 

directive @transform(
  type: String!
  name: String
  custom_type: String
  repeated: Boolean
  oneof: String
  map_key: String
  map_value: String
) on FIELD_DEFINITION | INPUT_FIELD_DEFINITION | ARGUMENT_DEFINITION | ENUM_VALUE | SCALAR | UNION | INTERFACE | ENUM | INPUT_OBJECT | OBJECT

`