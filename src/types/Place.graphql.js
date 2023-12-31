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

extend type Query {
  place(placeID: ID!): Place
  placeByID(placeID: ID!): Place
  placeByUUID(uuid: String!): Place!
  placeBySlug(slug: String!): Place!
  placeByLocation(lonlat: [String]!): Place!
  placesByIDs(ids: [ID!]!): [Place!]!
  placesByState(
    state: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Place!]!
  placesByCountry(
    country: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Place!]!
  placesByCity(
    city: String!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Place!]!
  placesByAuthor(
    authorID: ID!
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
    ): [Place!]!
  places(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Place!]!
}

type Mutation {
  createPlace(input: PlaceInput!): Place!
  updatePlace(placeID: ID!, input: PlaceInput!): Place!
  deletePlace(placeID: ID!): MutationResponse!
}

type Subscription {
  servicesPlaceListing: Place!
  servicesPlaceDetails: Place!
  servicesPlaceAdded: Place!
  servicesPlaceUpdated: Place!
  servicesPlaceDeleted: Place!
}
`;
