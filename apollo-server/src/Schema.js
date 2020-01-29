const { gql } = require("apollo-server-express");
// GraphQL Schema
const typeDefs = gql`
  type Query {
    Movie(
      imdbID: String
      Title: String
      tmdbID: Int
      Facebook: String
      Instagram: String
      Twitter: String
    ): Movie
    Movies(
      imdbID: String
      Title: String
      tmdbID: Int
      Facebook: String
      Instagram: String
      Twitter: String
    ): [Movie]
  }

  type Movie {
    #OMDB API

    Title: String
    Year: Int
    Rated: String
    Released: String
    Runtime: String
    Genre: [String]
    Directors: [Person]
    Writers: [Person]
    Actors: [Person]
    Plot: String
    Languages: [String]
    Country: String
    Awards: [String]
    Poster: String
    Ratings: [Source]
    Metascore: Int
    imdbRating: Float
    imdbVotes: Int
    imdbID: String
    Type: String
    DVD: String
    BoxOffice: String
    Production: String
    Website: String
    Response: Boolean
    #END OMDB API

    #CUSTOM API
    Images: [ImageSet]
    cast: [Person]
    clips: [String]
    trailers: [Trailer]
    Staring: [Person]
    torrents: [Torrent]
    stream_sites: [String]
    stream_urls: [String]
    Status: String
  }

  type Season {
    episodes: [Episode]
    air_date: String
    end_date: String
  }

  type Episode {
    Title: String
    summary: String
    air_date: String
  }

  type Person {
    name: Name
    age: Int
    movies: [Movie]
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

  type Name {
    first: String
    middle: String
    last: String
  }

  type Clip {
    Title: String
    description: String
    url: String
  }

  type Trailer {
    Title: String
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

  type Source {
    Source: String
    Value: String
  }
`;
module.exports = typeDefs;
