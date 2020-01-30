const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./src/Schema");
const resolvers = require("./src/Resolvers");
const dataSources = require("./src/DataSources");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

// The `listen` method launches a web server.
server.listen().then(resp => {
  console.log(`🚀  Server ready at ${resp.url}`);
});
