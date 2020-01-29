const ApiWrapper = require("./ApiWrapper");
const wrapper = new ApiWrapper();
const resolver = {
  Query: {
    /**
     * To Finish Tonight
     */
    movie: async (root, { imdb_id, title }) => {
      return imdb_id
        ? await wrapper.getMovieById(imdb_id)
        : await wrapper.getMovieByTitle(title);
    }
  },
  Movie: {
    title: async ({ imdb_id }) => {
      const { title } = await wrapper.getMovieById(imdb_id);
      return title;
    }
  }
};

module.exports = resolver;
