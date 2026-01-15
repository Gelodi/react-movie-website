import { useEffect, useState, useContext } from "react"
import { omdb } from "../api/omdb"
import MovieCard from "../components/MovieCard"
import { LanguageContext } from "../context/LanguageContext"

const recommendedQueries = [
  "Inception",
  "Interstellar",
  "Matrix",
  "Batman",
  "Fight Club",
  "Forrest Gump"
]

export default function Recommended() {
  const { texts } = useContext(LanguageContext)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    Promise.all(
      recommendedQueries.map(q =>
        omdb.get(`?s=${q}`)
      )
    ).then(responses => {
      const results = responses
        .map(r => r.data.Search?.[0])
        .filter(Boolean)

      setMovies(results)
    })
  }, [])

  return (
    <div className="home">
      <h2>{texts.recommended}</h2>

      <div className="grid">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}
