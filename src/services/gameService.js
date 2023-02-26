import axios from "axios";

const baseUrl = "http://localhost:3001/api/games";

const addGame = async (gameObject, token) => {
  const path = "addgame";

  const fullUrl = `${baseUrl}/${path}`;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.post(fullUrl, gameObject, config);
  return response;
};

const updateGame = async (gameObject, token) => {
  const path = "updategame";
  const fullUrl = `${baseUrl}/${path}`;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.patch(fullUrl, gameObject, config);
  return response;
};

// eslint-disable-next-line
export default { addGame, updateGame };
