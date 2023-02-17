import { createSlice } from '@reduxjs/toolkit'
import gamesService from "../services/gamesService"

const latestSlice = createSlice({
  name: 'latestGames',
  initialState: [],
  reducers: {
    setGames(state, action) {
      const allGames = action.payload
      return allGames
    }
  }
})

export const { setGames } = latestSlice.actions

export const initializeGames = () => {
  return async dispatch => {
    const all = await gamesService.getLatest()
    dispatch(setGames(all))
  }
}
 
export default latestSlice.reducer