const { DataSourceConfigs } = require("../config");
const OmdbAPI = require("./OmdbAPI");
const TmdbAPI = require("./TmdbAPI");

module.exports = {
  OmdbAPI: new OmdbAPI(DataSourceConfigs.omdb),
  TmdbAPI: new TmdbAPI(DataSourceConfigs.tmdb)
};
