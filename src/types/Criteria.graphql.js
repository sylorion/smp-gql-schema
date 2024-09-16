export default /* GraphQL */ `
# src/graphql/types/Criteria.graphql.js

type Criteria implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  criteriaID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  title: String
  description: String
  parentID: ID 
  # To design criteria as a tree graph, more the level is high more accurate is the criteria 
  level: Int
  # for the moment, but we will move to pivot objects
  criteriaTargetedEntity: CriteriaTargetedEntity

  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CreateCriteriaInput {
  authorID: ID!
  title: String!
  description: String
  parentID: ID
  # To design criteria as a tree graph, more the level is high more accurate is the criteria
  level: Int
  # for the moment, but we will move to pivot objects
  criteriaTargetedEntity: CriteriaTargetedEntity
  state: ObjectStatus
}

input UpdateCriteriaInput {
  authorID: ID!
  title: String
  description: String
  parentID: ID
  level: Int
  criteriaTargetedEntity: CriteriaTargetedEntity
  state: ObjectStatus
}

type MutationResponse {
  success: Boolean!
  message: String
  criteria: Criteria
}

extend type Query {
  criteria(criteriaID: ID!): Criteria
  criterias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Criteria!]!
}

type Mutation {
  createCriteria(input: CreateCriteriaInput!): Criteria!
  updateCriteria(criteriaID: ID!, input: UpdateCriteriaInput!): Criteria!
  deleteCriteria(criteriaID: ID!): MutationResponse!
}

type Subscription {
  criteriaAdded: Criteria!
  criteriaUpdated: Criteria!
  criteriaDeleted: Criteria!
}
`;
