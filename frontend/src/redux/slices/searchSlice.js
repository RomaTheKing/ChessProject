import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: initialState,
  reducers: {
    addGame(state, action) {
      console.log(action.payload);
      state.games.push(action.payload);
    },
    clear(state, action) {
      state.games = [];
    },
  },
});

export const { addGame, clear } = searchSlice.actions;
export default searchSlice.reducer;
