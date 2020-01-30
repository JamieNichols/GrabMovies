const Scraper = require("./Scraper");
class YFTScraper extends Scraper {
  constructor() {
    super();
  }

  async getTorrents(page) {
    const response = await this.nightmare
      .goto(page)
      .wait(".bottom-info .download-torrent.popup-ad")
      .evaluate(() => {
        return Array.from(
          document.querySelectorAll(".bottom-info .download-torrent.popup-ad")
        ).map(_a => {
          return {
            quality: _a.textContent.split(".")[0],
            type: _a.href.includes("magnet") ? "magnet" : "file",
            path: _a.href
          };
        });
      });
    return await response;
  }
}

module.exports = YFTScraper;
