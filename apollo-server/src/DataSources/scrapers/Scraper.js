const Nightmare = require("nightmare");
class Source {
  constructor() {}
  /**
   * @override
   */
  baseUrl = null;
  nightmare = Nightmare({ show: true });
}

module.exports = Source;
