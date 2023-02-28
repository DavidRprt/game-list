
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
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


export const popularGames = `${baseUrl}&dates=${lastYear},${currentDate}&ordering=-metacritic&page_size=24&stores=1,2,3,6`
export const upcomingGames = `${baseUrl}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`

