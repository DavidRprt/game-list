import { createSlice } from '@reduxjs/toolkit'
import loginService from "../services/loginService"

const userSlice = createSlice({
  name: 'user',
  initialState: false,
  reducers: {
    setUser(state, action) {
      const user = action.payload
      return user
    }
  }
})

export const { setUser } = userSlice.actions

export const initializeUser = () => {
  return async dispatch => {
    const user = await loginService.loginService()
    window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
    dispatch(setUser(user))
  }
}
 
export default userSlice.reducer