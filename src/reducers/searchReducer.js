import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: "search",
  initialState: { string: "", platform: "all" },
  reducers: {
    submitSearch(state, action) {
      state.platform = action.payload.platform
      state.string = action.payload.string
    }
  },
})

export const { submitSearch } = searchSlice.actions

export default searchSlice.reducer
