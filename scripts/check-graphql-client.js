const { graphQLClient } = require("../dist/src/lib/graphql-client.js");
console.log(
  "GraphQL client created with endpoint:",
  graphQLClient ? "ok" : "failed"
);
