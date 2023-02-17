import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const loginService = async (userObject) => {

    const response = await axios.post(baseUrl, userObject)
    return response.data
  }

  // eslint-disable-next-line
  export default { loginService }