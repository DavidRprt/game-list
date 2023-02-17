import { createSlice } from '@reduxjs/toolkit'
import gamesService from "../services/gamesService"

const myGamesSlice = createSlice({
  name: 'myGames',
  initialState: [],
  reducers: {
    addGames(state, action) {
      state.push(action.payload)
    },
    resetGames(state, action){
        return []
    }
  }
})

export const { addGames, resetGames } = myGamesSlice.actions

export const initializeMyGames = (slug) => {
  return async dispatch => {
    const game = await gamesService.getSingleGame(slug)
    dispatch(addGames(game))
  }
}
 
export default myGamesSlice.reducer