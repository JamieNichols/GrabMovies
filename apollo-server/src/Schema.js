const { gql } = require("apollo-server-express");
// GraphQL Schema
const typeDefs = gql`
  type Query {
    Movie(imdbID: String, title: String, id: Int): Movie
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
    poster_path: Image
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
    torrents: [Torrent]
    Staring: [Person]
    stream_sites: [String]
    stream_urls: [String]
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
    path: String
    type: String
    quality: String
    seeds: Int
    leechers: Int
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
  schema {
    query: Query
  }
`;
module.exports = typeDefs;
