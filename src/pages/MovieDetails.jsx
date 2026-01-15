import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { omdb } from "../api/omdb"
import Modal from "../components/Modal"

export default function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    omdb.get(`?i=${id}`).then(res => setMovie(res.data))
  }, [id])

  const addToWatchlist = () => {
    const list = JSON.parse(localStorage.getItem("watchlist")) || []
    if (!list.find(m => m.imdbID === movie.imdbID)) {
      localStorage.setItem("watchlist", JSON.stringify([...list, movie]))
      setShowModal(true)
    }
  }

  if (!movie) return null

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <button onClick={addToWatchlist}>Add to Watchlist</button>

      {showModal && (
        <Modal
          message="Added to Watchlist!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
