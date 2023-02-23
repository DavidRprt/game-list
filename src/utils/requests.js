import axios from 'axios'
import { popularGames } from '../utils/api'

export const getLatest = () => 
    axios.get(popularGames).then(res => res.data)

export const getSingleGame = (slug) => {
    const url = `https://api.rawg.io/api/games/${slug}?key=${process.env.REACT_APP_KEY}`
    return axios.get(url).then(res => res.data)
}

export const getSearch = async (searchText) => {
    const url = `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_KEY}&search=${searchText}&search_exact=true`
    console.log(url)
    return axios.get(url).then(res => res.data)
  
  }