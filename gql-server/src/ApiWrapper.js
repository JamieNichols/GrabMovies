const { keys } = require("./config");

const endpoints = {
  yts: "https://yts.ms/api/v2/search?q=",
  omdb: {
    movie_search: `http://www.omdbapi.com/?apikey=${keys}&`
  }
};

class ApiWrapper {
  constructor() {}

  //Public Methods
  getMovie(root, args, context) {
    if (args.imdb_code) {
    }
  }
}

module.exports = ApiWrapper;
