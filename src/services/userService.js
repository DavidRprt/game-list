import axios from "axios"

const login = async (userObject) => {
  const url = "http://localhost:3001/api/login"
  const response = await axios.post(url, userObject)
  return response.data
}

const signup = async (userObject) => {
  const url = "http://localhost:3001/api/signup"
  const response = await axios.post(url, userObject)
  return response.data
}

const updateUser = async (id) => {
  const url = `http://localhost:3001/api/user/${id}`;
  const response = await axios.get(url);
  return response.data;
}

// eslint-disable-next-line
export default { login, updateUser, signup }
