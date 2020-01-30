const MyDataSource = require("./MyDataSource");

class OmdbAPI extends MyDataSource {
  constructor(config) {
    super(config);
  }
  async getMovieById(imdb_id) {
    return await this.get({ i: imdb_id });
  }

  async getMovieByTitle(_title) {
    console.log(_title);
    return await this.get({ t: _title });
  }
}

module.exports = OmdbAPI;
