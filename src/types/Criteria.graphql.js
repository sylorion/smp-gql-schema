export default `
# src/graphql/types/Criteria.graphql.js

type Criteria implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  criteriaID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  title: String
  description: String
  parentID: ID
  parent: Criteria
  # To design criteria as a tree graph, more the level is high more accurate is the criteria 
  level: ID
  # for the moment, but we will move to pivot objects
  targetedEntityCriteria: TargetedEntityCriteria
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input CriteriaInput {
  criteriaID: ID
  authorID: ID!
  title: String
  criteriaDescription: String
  targetedEntityCriteria: TargetedEntityCriteria
  state: ObjectStatus
}

type CriteriaResponse implements FaillibleResponse {
  data: [Criteria!]
  errors: [MutationError!]
}

extend type Query {
  criteria(criteriaID: ID!): CriteriaResponse
  criterias(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): CriteriaResponse
}

type Mutation {
  createCriteria(input: CriteriaInput!): CriteriaResponse!
  updateCriteria(criteriaID: ID!, input: CriteriaInput!): CriteriaResponse!
  deleteCriteria(criteriaID: ID!): MutationResponse!
}

type Subscription {
  criteriaAdded: Criteria!
  criteriaUpdated: Criteria!
  criteriaDeleted: Criteria!
}
`;
