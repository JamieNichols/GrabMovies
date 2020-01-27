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
