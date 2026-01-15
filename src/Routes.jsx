import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Watchlist from "./pages/Watchlist"
import MovieDetails from "./pages/MovieDetails"
import Recommended from "./pages/Recommended"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommended" element={<Recommended />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  )
}
