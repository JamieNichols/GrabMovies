const { keys } = require("./config");
const { RESTDataSource } = require("apollo-datasource-rest");

const endpoints = {
  yts: "https://yts.ms/api/v2/search?q=",
  omdb: {
    movie_search: `http://www.omdbapi.com/?apikey=${keys}&`
  }
};

class ApiWrapper extends RESTDataSource {
  constructor() {
    super();
  }

  getMovieById(_imdb_id) {
    return {
      imdb_id: _imdb_id,
      title: "Men in Black",
      year: "test"
    };
  }

  getMovieByTitle(_title) {
    return {
      imdb_id: "tt123456",
      title: _title,
      year: "test"
    };
  }
}

module.exports = ApiWrapper;
