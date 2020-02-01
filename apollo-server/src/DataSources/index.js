const { DataSourceConfigs } = require("../config");
const OmdbAPI = require("./OmdbAPI");
const TmdbAPI = require("./TmdbAPI");
const PopcornAPI = require("./PopcornAPI");
module.exports = () => {
  return {
    OmdbAPI: new OmdbAPI(DataSourceConfigs.omdb),
    TmdbAPI: new TmdbAPI(DataSourceConfigs.tmdb),
    PopcornAPI: new PopcornAPI(DataSourceConfigs.popcorn)
  };
};
