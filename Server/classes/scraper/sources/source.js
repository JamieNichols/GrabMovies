const Nightmare = require("nightmare");
const looksSame = require("looks-same");
class Source {
  constructor() {}
  /**
   * @override
   */
  baseUrl = null;
  nightmare = Nightmare({ show: true });

  static verifyPoster(tmdb, source) {
    return looksSame(tmdb, source);
  }
}

module.exports = Source;
