const Scraper = require("./Scraper");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
class YFTScraper extends Scraper {
  constructor() {
    super();
    this.baseUrl = "https://onionplay.co/";
  }
  async getMovie(title, year) {
    const url_search = encodeURIComponent(title + " (" + year + ")");
    const response = await fetch(this.baseUrl + "search/" + url_search)
      .then(html => html.text())
      .then(domObj => {
        const $ = cheerio.load(domObj);
        const movie_page = $(".result-item:first-chid a").attr("href");
        console.log(movie_page);
      });
    return await response;
  }
}

module.exports = YFTScraper;
