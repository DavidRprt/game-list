import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const userSlice = createSlice({
  name: "user",
  initialState: false,
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      return user;
    },
    addGame(state, action) {
      const newGame = action.payload;
      const { user, ...newNewGame } = newGame;
      state.games.push(newNewGame);
    },
    updateGame(state, action) {
      const game = state.games.find(
        (game) => game.slug === action.payload.slug
      );
      if (action.payload.completed) game.completed = !game.completed;
      else game.radar = !game.radar;
    },
  },
});

export const { setUser, addGame, updateGame } = userSlice.actions;

export const initializeUser = () => {
  return async (dispatch) => {
    const user = await userService.login();
    window.localStorage.setItem("loggedUser", JSON.stringify(user));
    dispatch(setUser(user));
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    const userGames = await userService.updateUser(user.id);
    const newUser = {
      id: user.id,
      username: user.username,
      token: user.token,
      games: userGames.games,
    };
    dispatch(setUser(newUser));
  };
};

export default userSlice.reducer;
