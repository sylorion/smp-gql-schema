
export default `
# src/graphql/types/SMPContext.graphql.js
type Heartbeat {
  lastPing: Date
  interval: Int
  timeOut: Int
  timeOutCount: Int
  heartbeat: Int
  maxTimeOut: Int
  }

type Query {
  hello: String
  version: String
  heartbeat: Heartbeat
  requestCounter: Int
}
`;
