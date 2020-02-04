const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./src/Schema");
const resolvers = require("./src/Resolvers");
const dataSources = require("./src/DataSources");
/*
const { addTorrent } = require("./src/Automation/TorrentSeeder");
 addTorrent(
  "magnet:?xt=urn:btih:98CD5D90252265F1C59AB47330FF4C39F48CCC78&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337"
);
*/
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

// The `listen` method launches a web server.
server.listen().then(resp => {
  console.log(`🚀  Server ready at ${resp.url}`);
});
