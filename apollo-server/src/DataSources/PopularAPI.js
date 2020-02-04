const MyDataSource = require("./MyDataSource");
class PopularAPI extends MyDataSource {
  constructor(config) {
    super(config);
  }
  async getMostPopular() {
    return await this.get({}, "popular-movies/movies.json");
  }
}
module.exports = PopularAPI;
