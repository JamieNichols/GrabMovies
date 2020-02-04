const MyDataSource = require("./MyDataSource");

class PopcornAPI extends MyDataSource {
  constructor(config) {
    super(config);
  }
  async getTorrents(imdb_id, { min_quality, min_seed, languages }) {
    console.log(imdb_id);
    if (imdb_id) {
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
          let filtered = torrents_refactor;
          if (min_quality)
            filtered = filtered.filter(
              torrent => parseInt(torrent.quality) >= parseInt(min_quality)
            );
          if (min_seed)
            filtered = filtered.filter(
              torrent => parseInt(torrent.seed) >= parseInt(min_seed)
            );
          if (languages)
            filtered = filtered.filter(
              torrent => languages && languages.includes(torrent.language)
            );
          return filtered;
        }
      );

      return await response;
    } else {
      return null;
    }
  }
}

module.exports = PopcornAPI;
