import React from "react"
import { Link } from "gatsby"
import { useLazyQuery } from "@apollo/react-hooks"
import MOVIES_QUERY from "../apollo/query/MOVIES_QUERY"

const Movies = props => {
  const [
    executeSearch,
    {
      called,
      loading,
      error,
      data: { movies },
    },
  ] = useLazyQuery(MOVIES_QUERY)
  !called && executeSearch({ variables: { search: "men in black" } })

  return (
    <>
      {movies?.results &&
        movies?.results.map(({ poster: { small } }, i) => {
          return <img key={i} src={small}></img>
        })}
    </>
  )
}
export default Movies
