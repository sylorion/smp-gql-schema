// src/graphql/resolvers/HelloWorldResolvers.js

export default {
  Query: {
    hello: async () => "Services Market Place V0.0.1",
    version: async () => "PLATFORM: " + (process.env.SMP_PLATFORM_VERSION ?? "V0.1") + "| API: " + (process.env.SMP_GQL_API_VERSION ?? "v1.0")
  },
};
