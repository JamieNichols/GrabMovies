const Scraper = require("./Scraper");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
class YFTScraper extends Scraper {
  constructor(config) {
    super(config);
  }
  async getTorrentPage(title) {
    const { movies } = await this.get({ q: title }, "api/v2/search");
    const { slug } = await movies[0];
    return `${this.baseURL}movie/${await slug}`;
  }
  async getTorrents(title) {
    const page = await this.getTorrentPage(title);
    const response = await fetch(page)
      .then(html => html.text())
      .then(html => {
        const $ = cheerio.load(html);
        const torrents = [];
        $(".hidden-xs .download-torrent.popup-ad").each((i, elm) => {
          const path = $(elm).attr("href");
          const link_type = path.startsWith("magnet") ? "magnet" : "file";
          const quality = $(elm)
            .text()
            .trim();
          torrents.push({
            path,
            link_type,
            quality
          });
        });
        return torrents;
      });

    return await response;
  }
}

module.exports = YFTScraper;
