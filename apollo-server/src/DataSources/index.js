const { DataSourceConfigs } = require("../config");
const OmdbAPI = require("./OmdbAPI");
const TmdbAPI = require("./TmdbAPI");
const YFTAPI = require("./YFTAPI");
module.exports = () => {
  return {
    OmdbAPI: new OmdbAPI(DataSourceConfigs.omdb),
    TmdbAPI: new TmdbAPI(DataSourceConfigs.tmdb),
    YFTAPI: new YFTAPI(DataSourceConfigs.yft)
  };
};
