const { keys } = require("./config");
const { RESTDataSource } = require("apollo-datasource-rest");
const fetch = require("node-fetch");

const endpoints = {
  yts: "https://yts.ms/api/v2/search?q=",
  omdb: {
    movie_search: `http://www.omdbapi.com/?apikey=${keys.omdb}&`
  }
};

class ApiWrapper extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = endpoints.omdb.movie_search;
  }

  async getMovieById(_imdb_id) {
    console.log(this.get("http://google.com"));
    return JSON.stringify(await this.get(`i=${_imdb_id}`));
  }

  async getMovieByTitle(_title) {
    this.baseURL = endpoints.omdb.movie_search;
    return this.get(`t=${_title}`);
  }
}

module.exports = ApiWrapper;
