// src/graphql/resolvers/HelloWorldResolvers.js

export default {
  Query: {
    hello: async () => "Services Market Place V1.0.0.0",
    version: async () => "PLATFORM: " + (process.env.SMP_PLATFORM_VERSION ?? "V1.0.0") + "| API: " + (process.env.SMP_GQL_API_VERSION ?? "v1.0")
  },
};
