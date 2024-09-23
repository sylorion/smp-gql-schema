export default /* GraphQL */ `
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

input CreatePlaceInput {
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

input UpdatePlaceInput {
  
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

extend type Query {
  place(placeID: ID!): Place
  places(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Place!]!
  placeBySlug(Slug: String!): Place
  placesByIDs(placeIDs: [ID!]!): [Place!]!
  placesBySlugs(slugs: [String!]!): [Place!]!
  placeByUniqRef(UniqRef: String!): Place
}

type Mutation {
  createPlace(input: CreatePlaceInput!): Place!
  updatePlace(placeID: ID!, input: UpdatePlaceInput!): Place!
  deletePlace(placeID: ID!): MutationResponse!
}


`;
