import axios from "axios"

const login = async (userObject) => {
  const url = "/api/login"
  const response = await axios.post(url, userObject)
  return response.data
}

const signup = async (userObject) => {
  const url = "/api/signup"
  const response = await axios.post(url, userObject)
  return response.data
}

const updateUser = async (id) => {
  const url = `/api/user/${id}`;
  const response = await axios.get(url);
  return response.data;
}

// eslint-disable-next-line
export default { login, updateUser, signup }
