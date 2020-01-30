const resolvers = {
  Query: {
    Movie: async (root, { id, Title }, { dataSources }) => {
      return await dataSources.TmdbAPI.getMovieById(id);
    }
  },
  Movie: {
    Title: async ({ id }, params, { dataSources }) => {
      const { title } = await dataSources.TmdbAPI.getMovieById(id);
      return await title;
    }
  }
};
module.exports = resolvers;
