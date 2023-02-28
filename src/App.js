import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import RoutesConfig from "./utils/routes"
import { updateUser } from './reducers/userReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(updateUser(user))
    }
  }, [dispatch])

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <RoutesConfig />
        <Footer />
      </Router>
    </div>
  )
}

export default App;