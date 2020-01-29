/*
https://yts.ms/images/tt2277860/large_cover_image.jpg
https://yts.ms/api/v2/search?q=finding-nemo
https://yts.ms/api/v2/search?q=tt1409024
https://graphql.org/learn/schema/
https://www.npmjs.com/package/webtorrent
https://www.npmjs.com/package/nightmare-upload
https://www.imdb.com/title/tt7286456/?ref_=hm_fanfav_tt_2_pd_fp1
*/
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const resolvers = require("./src/Resolver");
const typeDefs = require("./src/Schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      moviesAPI: new MoviesAPI(),
      personalizationAPI: new PersonalizationAPI(),
    }
  },
  context: () => {
    return {
      token: 'foo',
    };});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
