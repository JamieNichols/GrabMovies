const { keys } = require("../config");
const MyDataSource = require("./MyDataSource");

class TmdbAPI extends MyDataSource {
  constructor(config) {
    super(config);
  }
  async getConfig() {
    return await (this.config = await this.get({}, "configuration"));
  }
  async getMovieById(_imdb_id) {
    await this.getConfig();
    return await this.get({ i: _imdb_id });
  }

  async getMovieByTitle(_title) {
    await this.getConfig();
    return await this.get({ t: _title });
  }
}

module.exports = TmdbAPI;
