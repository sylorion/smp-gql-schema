export default `
# src/graphql/types/Place.graphql.js

type Place implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  placeID: ID!
  uniqRef: String!
  slug: String!
  authorID: ID
  country: String
  region: String
  pstate: String
  city: String
  postalCode: String
  placeKind: PlaceKind
  addressLine1: String
  addressLine2: String
  coordinates: String
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

extend type Profile {
  location: Place
}

extend type Service {
  location: Place
}

input PlaceInput {
  placeID: ID
  authorID: ID
  country: String
  region: String
  pstate: String
  city: String
  postalCode: String
  placeKind: PlaceKind
  addressLine1: String
  addressLine2: String
  coordinates: String
  state: ObjectStatus
}

extend input ProfileInput {
  location: PlaceInput
}

type PlaceResponse {
  data: [Place!]
  errors: [MutationError!]
}

extend type Query {
  place(placeID: ID!): PlaceResponse
  places(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): PlaceResponse
}

type Mutation {
  createPlace(input: PlaceInput!): PlaceResponse!
  updatePlace(placeID: ID!, input: PlaceInput!): PlaceResponse!
  deletePlace(placeID: ID!): MutationResponse!
}

type Subscription {
  servicesPlaceAdded: Place!
  servicesPlaceUpdated: Place!
  servicesPlaceDeleted: Place!
}
`;
