
export default `
# src/graphql/types/Heartbeat.graphql.js
type Heartbeat {
  lastPing: Date
  interval: Int
  timeOut: Int
  timeOutCount: Int
  heartbeat: Int
  maxTimeOut: Int
  }
`;