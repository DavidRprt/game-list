import axios from "axios";
import { popularGames } from "../utils/api";

const getLatest = async () => {
  const response = await axios.get(popularGames);
  return response.data;
};

const getOwn = async (id) => {
  const url = `/api/games/${id}`;
  const response = await axios.get(url);
  return response.data;
};

const getSingleGame = async (slug) => {
  const url = `https://api.rawg.io/api/games/${slug}?key=${process.env.REACT_APP_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

// eslint-disable-next-line
export default { getLatest, getOwn, getSingleGame };
