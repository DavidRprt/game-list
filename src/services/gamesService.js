import axios from 'axios'
import { popularGames } from '../utils/api'

const getLatest = async () => {
    const response = await axios.get(popularGames)
    return response.data
  }

const getOwn = async (id) => {
  const url = `http://localhost:3001/api/games/${id}`
  const response = await axios.get(url)
    return response.data
}

const getSingleGame = async (slug) => {
  const url = `https://api.rawg.io/api/games/${slug}?key=adecf36d899846f3a08543009e1e7e5b`
  console.log(url)
  const response = await axios.get(url)
    return response.data
}
// eslint-disable-next-line
export default { getLatest, getOwn, getSingleGame }