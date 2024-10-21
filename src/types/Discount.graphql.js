export default /* GraphQL */`
# src/graphql/types/Discount.graphql.js

type Discount implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  discountID: ID!
  uniqRef: String!
  slug: String!
  authorID: ID
  description: String
  discountCode: String
  discountValue: Int
  discountInPercent: Boolean!
  startDate: DateTime
  endDate: DateTime
  organizationID: ID
  topicID: ID
  serviceID: ID
  userID: ID
  industryID: ID
  tagIDs: [ID]
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateDiscountInput {
  description: String
  discountCode: String
  discountValue: Int
  discountInPercent: Boolean!
  startDate: DateTime
  endDate: DateTime
  organizationID: ID
  topicID: ID
  serviceID: ID
  userID: ID
  industryID: ID
  tagIDs: [ID]
  state: ObjectStatus
}

input UpdateDiscountInput {
  description: String
  discountCode: String
  discountValue: Int
  discountInPercent: Boolean
  startDate: DateTime
  endDate: DateTime
  topicID: ID
  serviceID: ID
  industryID: ID
  tagIDs: [ID]
  state: ObjectStatus
}


extend type Query {
  discount(discountID: ID!): Discount
  discounts(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Discount!],
  discountBySlug(Slug: String!): Discount
  discountsByIDs(discountIDs: [ID!]!): [Discount!]
  discountsBySlugs(slugs: [String!]!): [Discount!]
  discountByUniqRef(UniqRef: String!): Discount
}

type Mutation {
  createDiscount(input: CreateDiscountInput!): Discount!
  updateDiscount(discountID: ID!, input: UpdateDiscountInput!): Discount!
  deleteDiscount(discountID: ID!): Boolean!
}


`;
