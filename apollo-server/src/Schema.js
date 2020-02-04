const { gql } = require("apollo-server-express");
// GraphQL Schema
const typeDefs = gql`
  type Query {
    movie(imdb_id: String, title: String, id: Int): Movie
    movies(search: String, page: Int): Movies
    popular: [Movie]
  }
  type Movies {
    page: Int
    results: [Movie]
    total_results: Int
    total_pages: Int
  }
  type Movie {
    adult: Boolean
    backdrop: ImagePaths
    belongs_to_collection: Collection
    budget: Int
    genre: [Genre]
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Int
    poster: ImagePaths
    production_companies: [ProductionCompany]
    production_countries: [Country]
    release_date: String
    revenue: Int
    runtime: String
    spoken_languages: [Language]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float #added
    vote_count: Int #added
    #start of extra data
    year: Int #added
    rated: String #added
    directors: [Person]
    writers: [Person]
    cast: [Person]
    plot: String
    country: String
    awards: [String]
    metascore: Int
    imdbRating: Float
    imdbVotes: Int
    type: String
    dvd: String
    boxOffice: String
    response: Boolean
    images: ImageSet
    videos: [Video]
    torrents(min_quality: String, min_seed: Int, languages: String): [Torrent]
    Staring: [Person]
    stream_sites: [String]
    stream_urls: [String]
    stream_sources: [StreamSource]
    alternative_titles: [AlternativeTitle]
  }

  type AlternativeTitle {
    iso_3166_1: String
    title: String
    type: String
  }

  type Collection {
    id: Int
    name: String
    poster_path: String
    backdrop_path: String
  }

  type Country {
    iso_639_1: String
    name: String
  }

  type Genre {
    id: Int
    name: String
  }

  type ImageSet {
    id: Int
    backdrops: [Image]
    posters: [Image]
  }

  type ImagePaths {
    small: String
    medium: String
    large: String
    original: String
  }

  type Image {
    aspect_ratio: Int
    file_path: ImagePaths
    height: Int
    iso_639_1: String
    vote_average: Int
    vote_count: Int
    width: Int
  }

  type Language {
    iso_639_1: String
    name: String
  }

  type Person {
    id: Int
    name: String
  }

  type ProductionCompany {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type Torrent {
    language: String
    url: String
    quality: String
    seed: Int
    peer: Int
    size: Int
    provider: String
  }

  type Video {
    id: Int
    iso_639_1: String
    iso_3166_1: String
    key: String
    name: String
    site: String
    size: Int
    type: String
  }
  type StreamSource {
    path: String
    source_type: String
    qualities: [String]
  }
  schema {
    query: Query
  }
`;
module.exports = typeDefs;
