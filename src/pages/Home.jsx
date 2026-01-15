import { useState, useContext } from "react"
import { omdb } from "../api/omdb"
import MovieCard from "../components/MovieCard"
import { LanguageContext } from "../context/LanguageContext"

export default function Home() {
  const { texts } = useContext(LanguageContext)

  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = () => {
    if (!search) return

    omdb.get(`?s=${search}`).then(res => {
      setMovies(res.data.Search || [])
    })
  }

  return (
    <div className="home">
      <div className="search-bar">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={texts.searchPlaceholder}
        />
        <button onClick={searchMovies}>
          {texts.search}
        </button>
      </div>

      <div className="grid">
        {movies.length === 0 && <p>{texts.empty}</p>}

        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}
