const resolvers = {
  Query: {
    movie: async (root, { id, title, imdb_id }, { dataSources }) => {
      if (id) {
        return await dataSources.TmdbAPI.getMovieById(id);
      } else if (title) {
        return await dataSources.TmdbAPI.getMovieByTitle(title);
      } else if (imdb_id) {
        return await dataSources.TmdbAPI.getMovieByIMDBID(imdb_id);
      }
    },
    movies: async (root, { search, page }, { dataSources }) => {
      return await dataSources.TmdbAPI.searchMovies(search, page);
    }
  },

  Movies: {
    page: async ({ page }) => {
      return page;
    },
    results: async ({ results }) => {
      return results;
    },
    total_results: async ({ total_results }) => {
      return total_results;
    },
    total_pages: async ({ total_pages }) => {
      return total_pages;
    }
  },

  Movie: {
    adult: async ({ adult }, params, { dataSources }) => {
      return adult;
    },

    backdrop: async ({ backdrop_path }, params, { dataSources }) => {
      return await dataSources.TmdbAPI.getImageSizes(backdrop_path, "backdrop");
    },

    belongs_to_collection: async ({ id }, params, { dataSources }) => {
      const { belongs_to_collection } = await dataSources.TmdbAPI.getMovieById(
        id
      );
      return await belongs_to_collection;
    },

    budget: async ({ id }, params, { dataSources }) => {
      const { budget } = await dataSources.TmdbAPI.getMovieById(id);
      return await budget;
    },

    genre: async ({ id }, params, { dataSources }) => {
      const { genre } = await dataSources.TmdbAPI.getMovieById(id);
      return await genre;
    },

    homepage: async ({ id }, params, { dataSources }) => {
      const { homepage } = await dataSources.TmdbAPI.getMovieById(id);
      return await homepage;
    },

    id: async (root, params, { dataSources }) => {
      const { id } = await dataSources.TmdbAPI.getMovieById(root.id);
      return id;
    },

    imdb_id: async ({ id }, params, { dataSources }) => {
      const { imdb_id } = await dataSources.TmdbAPI.getMovieById(id);
      return await imdb_id;
    },

    original_language: async ({ id }, params, { dataSources }) => {
      const { original_language } = await dataSources.TmdbAPI.getMovieById(id);
      return await original_language;
    },

    original_title: async ({ id }, params, { dataSources }) => {
      const { original_title } = await dataSources.TmdbAPI.getMovieById(id);
      return await original_title;
    },

    overview: async ({ id }, params, { dataSources }) => {
      const { overview } = await dataSources.TmdbAPI.getMovieById(id);
      return await overview;
    },

    popularity: async ({ id }, params, { dataSources }) => {
      const { popularity } = await dataSources.TmdbAPI.getMovieById(id);
      return await popularity;
    },

    poster: async ({ poster_path }, params, { dataSources }) => {
      return await dataSources.TmdbAPI.getImageSizes(poster_path, "poster");
    },

    production_companies: async ({ id }, params, { dataSources }) => {
      const { production_companies } = await dataSources.TmdbAPI.getMovieById(
        id
      );
      return await production_companies;
    },

    production_countries: async ({ id }, params, { dataSources }) => {
      const { production_countries } = await dataSources.TmdbAPI.getMovieById(
        id
      );
      return await production_countries;
    },

    release_date: async ({ id }, params, { dataSources }) => {
      const { release_date } = await dataSources.TmdbAPI.getMovieById(id);
      return await release_date;
    },

    revenue: async ({ id }, params, { dataSources }) => {
      const { revenue } = await dataSources.TmdbAPI.getMovieById(id);
      return await revenue;
    },

    runtime: async ({ id }, params, { dataSources }) => {
      const { runtime } = await dataSources.TmdbAPI.getMovieById(id);
      return await runtime;
    },

    spoken_languages: async ({ id }, params, { dataSources }) => {
      const { spoken_languages } = await dataSources.TmdbAPI.getMovieById(id);
      return await spoken_languages;
    },

    status: async ({ id }, params, { dataSources }) => {
      const { status } = await dataSources.TmdbAPI.getMovieById(id);
      return await status;
    },

    tagline: async ({ id }, params, { dataSources }) => {
      const { tagline } = await dataSources.TmdbAPI.getMovieById(id);
      return await tagline;
    },

    title: async ({ id }, params, { dataSources }) => {
      const { title } = await dataSources.TmdbAPI.getMovieById(id);
      return await title;
    },

    video: async ({ id }, params, { dataSources }) => {
      const { video } = await dataSources.TmdbAPI.getMovieById(id);
      return await video;
    },

    vote_average: async ({ id }, params, { dataSources }) => {
      const { vote_average } = await dataSources.TmdbAPI.getMovieById(id);
      return await vote_average;
    },

    vote_count: async ({ id }, params, { dataSources }) => {
      const { vote_count } = await dataSources.TmdbAPI.getMovieById(id);
      return await vote_count;
    },

    year: async ({ id }, params, { dataSources }) => {
      const { release_date } = await dataSources.TmdbAPI.getMovieById(id);
      return await release_date.split("-")[0];
    },

    rated: async ({ title }, params, { dataSources }) => {
      const { Rated } = await dataSources.OmdbAPI.getMovieByTitle(title);
      return await Rated;
    },

    torrents: async (root, filters, { dataSources }) => {
      if (!root.imdb_id) {
        let { imdb_id } = await dataSources.TmdbAPI.getMovieById(root.id);
        return await dataSources.PopcornAPI.getTorrents(await imdb_id, filters);
      } else {
        return await dataSources.PopcornAPI.getTorrents(root.imdb_id, filters);
      }
    }
  }
};
module.exports = resolvers;
