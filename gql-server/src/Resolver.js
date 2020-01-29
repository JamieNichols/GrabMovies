const wrapper = require("./ApiWrapper");

const resolver = {
  Query: {
    /**
     * @todo
     *
     **/
    Movies: wrapper.getMovies,

    /**
     * To Finish Tonight
     */
    Movie: wrapper.getMovie
  }
};

module.exports = resolver;
