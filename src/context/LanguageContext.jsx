import { createContext, useState } from "react"

export const LanguageContext = createContext()

const translations = {
  en: {
    home: "Home",
    watchlist: "Watchlist",
    recommended: "Recommended",
    search: "Search",
    searchPlaceholder: "Search movies...",
    empty: "Search for movies"
  },
  ka: {
    home: "მთავარი",
    watchlist: "სანიშნეები",
    recommended: "რეკომენდებული",
    search: "ძიება",
    searchPlaceholder: "მოძებნე ფილმი...",
    empty: "მოძებნეთ ფილმები"
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "en"
  )

  const value = {
    lang,
    setLang,
    texts: translations[lang]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
