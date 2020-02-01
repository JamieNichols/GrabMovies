const MyDataSource = require("../MyDataSource");
const Nightmare = require("nightmare");
class Scraper extends MyDataSource {
  constructor() {}
  /**
   * @override
   */
  baseUrl = null;
  nightmare = Nightmare({ show: true });
}

module.exports = Scraper;
