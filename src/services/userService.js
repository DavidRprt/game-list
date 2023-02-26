import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

const login = async (userObject) => {
  const response = await axios.post(baseUrl, userObject);
  return response.data;
};

const updateUser = async (id) => {
  const url = `http://localhost:3001/api/user/${id}`;
  const response = await axios.get(url);
  return response.data;
};

// eslint-disable-next-line
export default { login, updateUser };
