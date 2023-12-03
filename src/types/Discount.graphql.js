export default `
# src/graphql/types/Discount.graphql.js

type Discount implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  discountID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  description: String
  discountCode: String
  discountValue: Int
  discountInPercent: Boolean!
  startDate: DateTime
  endDate: DateTime
  serviceID: ID
  organizationID: ID
  topicID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input DiscountInput {
  discountID: ID
  authorID: ID
  description: String
  discountCode: String
  discountValue: Int
  discountInPercent: Boolean
  startDate: DateTime
  endDate: DateTime
  serviceID: ID
  organizationID: ID
  topicID: ID
  state: ObjectStatus
}

type DiscountResponse  {
  data: [Discount!]
  errors: [MutationError!]
}

extend type Query {
  discount(discountID: ID!): DiscountResponse
  discounts(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): DiscountResponse
}

type Mutation {
  createDiscount(input: DiscountInput!): DiscountResponse!
  updateDiscount(discountID: ID!, input: DiscountInput!): DiscountResponse!
  deleteDiscount(discountID: ID!): MutationResponse!
}

type Subscription {
  discountAdded: Discount!
  discountUpdated: Discount!
  discountDeleted: Discount!
}
`;
