import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Watchlist from "./pages/Watchlist"
import MovieDetails from "./pages/MovieDetails"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from "./context/LanguageContext"
import "./styles/main.scss"

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
