import axios from "axios"

export const getLatest = (page, filter) => {
  const baseUrl = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}`
  const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
      return `0${month}`
    } else {
      return month
    }
  }

  const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10) {
      return `0${day}`
    } else {
      return day
    }
  }

  const currentYear = new Date().getFullYear()
  const currentMonth = getCurrentMonth()
  const currentDay = getCurrentDay()
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
  const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
  const last3Years = `${currentYear - 3}-${currentMonth}-${currentDay}`
  const AllTime = `${currentYear - 30}-${currentMonth}-${currentDay}`

  let url = `${baseUrl}&dates=${lastYear},${currentDate}&ordering=-metacritic&page_size=24&stores=1,2,3,6&page=${page}`
  if (filter === "Last 3 Years")
    url = `${baseUrl}&dates=${last3Years},${currentDate}&ordering=-metacritic&page_size=24&stores=1,2,3,6&page=${page}`
  else if (filter === "All time")
    url = `${baseUrl}&dates=${AllTime},${currentDate}&ordering=-metacritic&page_size=24&stores=1,2,3,6&page=${page}`
  return axios.get(url).then((res) => res.data)
}

export const getSingleGame = (slug) => {
  const url = `https://api.rawg.io/api/games/${slug}?key=${process.env.REACT_APP_KEY}`
  return axios.get(url).then((res) => res.data)
}

export const getSearch = async (searchText, platform) => {
  let stores = ""
  if (platform === "Nintendo") {
    stores = "&stores=6"
  } else if (platform === "PlayStation") {
    stores = "&stores=3"
  } else if (platform === "XBOX") {
    stores = "&stores=2"
  } else if (platform === "Steam") {
    stores = "&stores=1"
  }

  const url = `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_KEY}&search=${searchText}&search_exact=true${stores}`
  return axios.get(url).then((res) => res.data)
}
