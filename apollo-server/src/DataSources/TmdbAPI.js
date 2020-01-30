const MyDataSource = require("./MyDataSource");

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
  //Main Functions for getting Movie Data
  async findByExternalID(external_source, external_id) {
    return await this.get({ external_source }, "find/" + id);
  }

  async getMovieByTitle(_title) {
    const { results } = await this.get({ query: _title }, "search/movie");
    const { id } = await results[0];
    return await this.getMovieById(id);
  }

  async getImagesByMovieId(id) {}
}

String.prototype.toArray = function() {
  return this.split(",").map(item => item.trim());
};

module.exports = TmdbAPI;
