const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/Schema");
const resolvers = require("./src/Resolver");
const DataSources = require("./src/DataSources");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => DataSources
});

// The `listen` method launches a web server.
server.listen().then(resp => {
  console.log(`🚀  Server ready at ${resp.url}`);
});
