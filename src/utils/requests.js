import axios from 'axios'
import { popularGames } from '../utils/api'

export const getLatest = () => 
    axios.get(popularGames).then(res => res.data)

export const getSingleGame = (slug) => {
    const url = `https://api.rawg.io/api/games/${slug}?key=adecf36d899846f3a08543009e1e7e5b`
    return axios.get(url).then(res => res.data)
}