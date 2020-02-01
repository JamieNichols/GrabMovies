const MyDataSource = require("./MyDataSource");

class PopcornAPI extends MyDataSource {
  constructor(config) {
    super(config);
  }
  async getTorrents(imdb_id) {
    const response = await this.get({}, `movie/${imdb_id}`).then(
      ({ torrents }) => {
        let torrents_refactor = [];
        for (var lang_key in torrents) {
          for (var quality_key in torrents[lang_key]) {
            const torrent = torrents[lang_key][quality_key];
            torrent.quality = quality_key;
            torrent.language = lang_key;
            torrents_refactor.push(torrent);
          }
        }
        return torrents_refactor;
      }
    );
    return await response;
  }
}

module.exports = PopcornAPI;
