const resolver = {
  Query: {
    Movie: async (root, { imdbID, Title }, { dataSources }, info) => {
      const movie = imdbID
        ? await dataSources.TmdbaPI.getMovieById(imdbID)
        : await dataSources.TmdbAPI.getMovieByTitle(Title);
      return await movie;
    }
  },
  Movie: {
    Title: async ({ imdbID }, args, { dataSources }, info) => {
      const { Title } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return await Title;
    },
    Year: async ({ imdbID }, args, { dataSources }, info) => {
      const { Year } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Year;
    },
    Rated: async ({ imdbID }, args, { dataSources }, info) => {
      const { Rated } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Rated;
    },
    Released: async ({ imdbID }, args, { dataSources }, info) => {
      const { Released } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Released;
    },
    Runtime: async ({ imdbID }, args, { dataSources }, info) => {
      const { Runtime } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Runtime;
    },
    Genre: async ({ imdbID }, args, { dataSources }, info) => {
      const { Genre } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return;
    },
    /**
     * @todo loop through Directors and get all Person information
     */
    Directors: async ({ imdbID }, args, { dataSources }, info) => {
      const { Directors } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Directors;
    },
    /**
     * @todo loop through Writers and get all Person information
     */
    Writers: async ({ imdbID }, args, { dataSources }, info) => {
      const { Writers } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Writers;
    },
    /**
     * @todo loop through Actors and get all Person information
     */
    Actors: async ({ imdbID }, args, { dataSources }, info) => {
      const { Actors } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Actors;
    },

    Plot: async ({ imdbID }, args, { dataSources }, info) => {
      const { Plot } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Plot;
    },
    Languages: async ({ imdbID }, args, { dataSources }, info) => {
      const { Language } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Language.toArray();
    },
    Country: async ({ imdbID }, args, { dataSources }, info) => {
      const { Country } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Country;
    },
    Awards: async ({ imdbID }, args, { dataSources }, info) => {
      const { Awards } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Awards.toArray();
    },
    Country: async ({ imdbID }, args, { dataSources }, info) => {
      const { Country } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Country;
    },
    Country: async ({ imdbID }, args, { dataSources }, info) => {
      const { Country } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Country;
    },
    Country: async ({ imdbID }, args, { dataSources }, info) => {
      const { Country } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Country;
    },
    Country: async ({ imdbID }, args, { dataSources }, info) => {
      const { Country } = await dataSources.OmdbAPI.getMovieById(imdbID);
      return Country;
    }
  }
};

String.prototype.toArray = function() {
  return this.split(",").map(item => item.trim());
};

module.exports = resolver;
