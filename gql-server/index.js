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
const express_graphql = require("express-graphql");
require("graphql");

const schema = require("./src/Schema");
const rootValue = require("./src/Resolver");
//Show Graphiql
const graphiql = true;

// Create an express server and GraphQl endpoint
const app = express();
app.use(
  "/graphql",
  express_graphql({
    schema,
    rootValue,
    graphiql
  })
);

app.listen(3000, () =>
  console.log("Express server is running on 3000 with graphql")
);
