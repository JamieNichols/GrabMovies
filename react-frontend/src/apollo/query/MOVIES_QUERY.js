import gql from "graphql-tag"

export const MOVIES_QUERY = gql`
  query MoviesQuery($search: String, $page: Int) {
    movies(search: $search, page: $page) {
      results {
        poster {
          small
        }
      }
    }
  }
`

export default MOVIES_QUERY
