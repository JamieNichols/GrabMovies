import gql from "graphql-tag"

export const POPULAR_QUERY = gql`
  query PopularQuery {
    popular {
      title
      poster {
        small
      }
    }
  }
`

export default POPULAR_QUERY
