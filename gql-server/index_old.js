const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

//Show Graphiql
const graphiql = true;
// GraphQL Schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const rootValue = {
  message: () => "Hello World!"
};

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
