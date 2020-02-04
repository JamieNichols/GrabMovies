const MyDataSource = require("./MyDataSource");
//const TMDBDiscoverer = require("tmdb-discoverer");

class TmdbAPI extends MyDataSource {
  constructor(config) {
    super(config);
  }
  async getConfig() {
    if (!this.config) this.config = await super.get({}, "configuration");
    return await this.config;
  }
  async get(params, endpoint) {
    if (!this.config) await this.getConfig();
    return await super.get(params, endpoint);
  }
  async getMovieById(id) {
    return await this.get({}, "movie/" + id);
  }
  async getMovieByIMDBID(imdb_id) {
    const { movie_results } = await this.get(
      { external_source: "imdb_id" },
      `find/${imdb_id}`
    );
    return await this.getMovieById(movie_results[0].id);
  }
  //Main Functions for getting Movie Data
  async findByExternalID(external_source, external_id) {
    return await this.get({ external_source }, "find/" + id);
  }

  async getMovieByTitle(_title = "The Matrix") {
    const { results } = await this.get({ query: _title }, "search/movie");
    const { id } = await results[0];
    return await this.getMovieById(id);
  }

  async searchMovies(query = "The Matrix", page = 1) {
    const results = await this.get({ query, page }, "search/movie");
    return await results;
  }

  async getImagesByMovieId(id) {}

  async getImageSizes(path, image_type) {
    const config = await this.getConfig();
    const sizes = await config.images[`${image_type}_sizes`];
    return await {
      small: (await config.images.base_url) + (await sizes[0]) + (await path),
      medium: (await config.images.base_url) + (await sizes[1]) + (await path),
      large: (await config.images.base_url) + (await sizes[2]) + (await path),
      original: (await config.images.base_url) + (await sizes[2]) + (await path)
    };
  }
}

String.prototype.toArray = function() {
  return this.split(",").map(item => item.trim());
};

module.exports = TmdbAPI;
