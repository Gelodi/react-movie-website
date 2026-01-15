import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { LanguageContext } from "../context/LanguageContext"

export default function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  const { lang, setLang, texts } = useContext(LanguageContext)

  return (
    <nav className="navbar">
      <div className="logo">🎬 Movie Explorer</div>

      <div className="nav-links">
        <Link to="/">{texts.home}</Link>
        <Link to="/recommended">{texts.recommended}</Link>
        <Link to="/watchlist">{texts.watchlist}</Link>
      </div>

      <div className="nav-actions">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button onClick={() => setLang(lang === "en" ? "ka" : "en")}>
          {lang.toUpperCase()}
        </button>
      </div>
    </nav>
  )
}
