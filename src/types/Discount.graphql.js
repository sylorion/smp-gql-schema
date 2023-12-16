export default `
# src/graphql/types/Discount.graphql.js

type Discount implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  discountID :: ID!
  uniqRef :   String!
  slug :  String!
  authorID :  ID
  description :   String
  discountCode :  String
  discountValue :   Int
  discountInPercent :   Boolean!
  startDate :   DateTime
  endDate :   DateTime
  organizationID :  ID
  topicID :   ID
  serviceID :   ID
  userID :  ID
  industryID :  ID
  tagIDs :   [ID]
  state :   ObjectStatus
  createdAt :   DateTime
  updatedAt :   DateTime
  deletedAt :   DateTime
}

input DiscountInput {
  discountID :: ID
  authorID :  ID
  description :   String
  discountCode :  String
  discountValue :   Int
  discountInPercent :   Boolean!
  startDate :   DateTime
  endDate :   DateTime
  organizationID :  ID
  topicID :   ID
  serviceID :   ID
  userID :  ID
  industryID :  ID
  tagIDs :   [ID]
  state :   ObjectStatus}

extend type Query {
  discount(discountID: ID!): Discount
  discounts(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Discount!]
}

type Mutation {
  createDiscount(input: DiscountInput!): Discount!
  updateDiscount(discountID: ID!, input: DiscountInput!): Discount!
  deleteDiscount(discountID: ID!): MutationResponse!
}

type Subscription {
  discountAdded: Discount!
  discountUpdated: Discount!
  discountDeleted: Discount!
}
`;
