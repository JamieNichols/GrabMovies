const { gql } = require("apollo-server-express");
// GraphQL Schema
const typeDefs = gql`
  type Query {
    movie(imdb_id: String, title: String): Movie
    movies: [Movie]
    show: Show
    shows: [Show]
    season(season_number: Int!): Season
    seasons(imdb_id: Int!): [Season]
  }

  type Movie {
    imdb_id: String
    title: String
    status: String
    plot_summary: String
    genres: [String]
    release_date: String
    time: String
    year: Int
    rating: String
    rating_value: Float
    rating_count: Int
    images: [ImageSet]
    photos: [Image]
    directors: [Director]
    writers: [Writer]
    stars: [Actor]
    cast: [Actor]
    languages: [String]
    countries: [String]
    clips: [String]
    trailers: [Trailer]
    awards: [String]
    torrents: [Torrent]
    stream_sites: [String]
    stream_urls: [String]
  }

  type Show {
    imdb_id: String
    title: String
    status: String
    plot_summary: String
    genres: [String]
    air_date: String
    end_date: String
    time: String
    year: Int
    rating: String
    rating_value: Float
    rating_count: Int
    images: [ImageSet]
    photos: [Image]
    directors: [Director]
    writers: [Writer]
    stars: [Actor]
    cast: [Actor]
    languages: [String]
    countries: [String]
    clips: [Clip]
    trailers: [Trailer]
    awards: [String]
    torrents: [Torrent]
    stream_sites: [String]
    stream_urls: [String]
    seasons: [Season]
  }

  type Season {
    episodes: [Episode]
    air_date: String
    end_date: String
  }

  type Episode {
    title: String
    summary: String
    air_date: String
  }

  type Actor {
    name: Name
    age: Int
    movies: [Movie]
    shows: [Show]
    awards: [String]
    photos: [Image]
    knownfor: [Movie]
    bio: String
    personal: PersonalData
  }

  type PersonalData {
    knownfor: String
    gender: String
    known_credits: Int
    birthday: String
    place_of_birth: Place
    official_site: String
  }

  type Place {
    city: String
    state: String
    country: String
  }

  type Director {
    name: Name
    age: Int
    movies: [Movie]
    shows: [Show]
    photos: [Image]
  }

  type Writer {
    name: Name
    age: Int
    movies: [Movie]
    shows: [Show]
    awards: [String]
    photos: [Image]
    personal: PersonalData
  }

  type Name {
    first: String
    middle: String
    last: String
  }

  type Clip {
    title: String
    description: String
    url: String
  }

  type Trailer {
    title: String
    path: String
    length: Int
  }

  type Torrent {
    magnet: String
    direct_download: String
    seeds: Int
    leachers: Int
  }

  type ImageSet {
    small: Image
    mediume: Image
    large: Image
  }

  type Image {
    size: Size
    path: String
  }

  type Size {
    width: Int
    height: Int
  }
`;
module.exports = typeDefs;
