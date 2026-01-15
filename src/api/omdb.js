import axios from "axios"

export const omdb = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: "e501b11e"
  }
})
