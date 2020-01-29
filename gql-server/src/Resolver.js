const ApiWrapper = require("./ApiWrapper");
const wrapper = new ApiWrapper();
const resolver = {
  Query: {
    /**
     * To Finish Tonight
     */
    movie: (root, { imdb_id, title }) => {
      return imdb_id
        ? wrapper.getMovieById(imdb_id)
        : wrapper.getMovieByTitle(title);
    }
  },
  Movie: {
    title: ({ imdb_id }) => {
      const { title } = wrapper.getMovieById(imdb_id);
      return title;
    }
  }
};

module.exports = resolver;
