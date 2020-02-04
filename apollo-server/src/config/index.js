const DataSourceConfigs = {
  omdb: {
    base: "http://www.omdbapi.com/",
    key_name: "apikey",
    key_value: "2867f038"
  },
  tmdb: {
    base: "https://api.themoviedb.org/3/",
    key_name: "api_key",
    key_value: "e8be92e5033230687ec1953e7045db83"
  },
  popcorn: {
    base: "https://movies-v2.api-fetch.website/",
    key_name: "",
    key_value: ""
  },
  yft: {
    base: "https://yts.ms/",
    key_name: "",
    key_value: ""
  },
  onion: {
    base: "https://onionplay.co/",
    key_name: "",
    key_value: ""
  },
  popular: {
    base: "https://s3.amazonaws.com/",
    key_name: "",
    key_value: ""
  }
};

module.exports = {
  DataSourceConfigs
};
