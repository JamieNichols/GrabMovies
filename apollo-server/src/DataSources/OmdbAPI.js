const MyDataSource = require("./MyDataSource");

class OmdbAPI extends MyDataSource {
  constructor(config) {
    super(config);
  }
  async getMovieById(_imdb_id) {
    return await this.get({ i: _imdb_id });
  }

  async getMovieByTitle(_title) {
    console.log(_title);
    return await this.get({ t: _title });
  }
}

module.exports = OmdbAPI;
