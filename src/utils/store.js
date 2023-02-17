import { configureStore } from '@reduxjs/toolkit'
import latestReducer from '../reducers/latestReducer'
import userReducer from '../reducers/userReducer'
import myGamesReducer from '../reducers/myGamesReducer'


const store = configureStore({
  reducer: {
    latest: latestReducer,
    user: userReducer,
    myGames: myGamesReducer
  }
})

export default store