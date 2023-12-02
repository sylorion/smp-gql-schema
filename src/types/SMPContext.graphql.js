
export default `
# src/graphql/types/SMPContext.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

type Query {
  hello: String @shareable
  version: String @shareable
}
`;
