import React from "react"
import { useLazyQuery } from "@apollo/react-hooks"
import POPULAR_QUERY from "../apollo/query/POPULAR_QUERY"
const Movies = props => {
  const [executeSearch, { called, loading, error, data }] = useLazyQuery(
    POPULAR_QUERY
  )

  !called && executeSearch()

  return (
    <>
      called && Console.log(movie)
      {called &&
        data.map((movie, i) => {
          console.log(movie)
          return <img key={i} src={movie?.poster?.small}></img>
        })}
    </>
  )
}
export default Movies
