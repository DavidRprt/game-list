import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { initializeGames } from './reducers/latestReducer'
import { initializeMyGames } from './reducers/myGamesReducer'
import RoutesConfig from "./utils/routes"
import {setUser} from './reducers/userReducer'

function App() {
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(initializeGames())
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
    }
  }, [dispatch])

  const user = useSelector(state => state.user)
  const myGames = useSelector(state => state.myGames)
  const addedSlugs = useRef([])

  useEffect(() => {
    if (myGames.length > 1) {
      user.games.forEach(slug => {
        if (!addedSlugs.current.includes(slug)) {
          dispatch(initializeMyGames(slug))
          addedSlugs.current.push(slug)
        }
      })
    }
  }, [dispatch, user, myGames])


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