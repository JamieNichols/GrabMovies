const MyDataSource = require("./MyDataSource");
const YFTScraper = require("./scrapers/YFTScraper");

class YFTAPI extends MyDataSource {
  constructor(config) {
    super(config);
  }

  async getTorrentPage(title) {
    const { movies } = await this.get({ q: title }, "api/v2/search");
    const { slug } = await movies[0];
    return `${this.baseURL}movie/${await slug}`;
  }
  async getTorrents(title) {
    const scraper = new YFTScraper();
    const page_url = await this.getTorrentPage(title);
    const torrents = await scraper.getTorrents(page_url);
    return await torrents;
  }
}

module.exports = YFTAPI;
