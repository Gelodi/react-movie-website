import { useEffect, useState } from "react"

export default function Watchlist() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("watchlist")) || [])
  }, [])

  const removeMovie = id => {
    const updated = movies.filter(m => m.imdbID !== id)
    setMovies(updated)
    localStorage.setItem("watchlist", JSON.stringify(updated))
  }

  return (
    <div>
      <h1>Watchlist</h1>

      {movies.length === 0 && <p>No movies yet</p>}

      {movies.map(movie => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <button onClick={() => removeMovie(movie.imdbID)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}
