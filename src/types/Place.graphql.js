export default `
# src/graphql/types/Place.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

type Place implements ServicesEntity & ServicesNavigableEntity & ServicesStatable  @shareable {
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

extend type Profile  @shareable {
  location: Place
}

extend type Service  @shareable {
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

type PlaceResponse  @shareable {
  data: [Place!]
  errors: [MutationError!]
}

extend type Query @shareable {
  place(placeID: ID!): PlaceResponse
  places(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): PlaceResponse
}

type Mutation @shareable {
  createPlace(input: PlaceInput!): PlaceResponse!
  updatePlace(placeID: ID!, input: PlaceInput!): PlaceResponse!
  deletePlace(placeID: ID!): MutationResponse!
}

type Subscription @shareable {
  servicesPlaceAdded: Place!
  servicesPlaceUpdated: Place!
  servicesPlaceDeleted: Place!
}
`;
