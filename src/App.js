import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import RoutesConfig from "./utils/routes"
import {setUser} from './reducers/userReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
    }
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <RoutesConfig />
      </Router>
    </div>
  )
}

export default App;