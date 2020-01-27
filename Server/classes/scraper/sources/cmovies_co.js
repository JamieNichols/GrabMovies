const { Source } = require("./source");

module.exports = {
  baseUrl = "https://cmovies.tv/";
  searchPath = "movie/search/";
  Cmovies: class extends Source {
    constructor() {
      super();
    }
  }
};
