/*
frontEnd will get movie list from tmdb.
send verified title to api.

api movies search
loop through sources (index.js array)
run search result method
display if results are found.



*/
const apis = require("./classes/apis");
const express = require("express");
const app = express();
const port = 80;
const runner = (api, params) => {
  apis[api](params);
};

const Authenticate = headers => {
  return true;
};
app.get("/api/*", (req, res) => {
  res.send("your in the right spot");

  const { path, query } = req;
  const api = path.split("/")[2];
  if (Authenticate(req.headers)) runner(api, query);
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
