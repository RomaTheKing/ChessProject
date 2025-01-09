import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../API/api";

export const addGame = createAsyncThunk(
  "search/addGame",
  async ({ initTime, deltaTime, mode }) => {
    console.log(initTime, deltaTime, mode, getToken());
    const { data } = await axios.post(
      `http://localhost:8080/api/search/add`,
      {
        initTime,
        deltaTime,
        mode,
      },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
    console.log(data);
    return data;
  }
);

export const getGames = createAsyncThunk("search/getGames", async ({}) => {
  const { data } = await axios.post(
    `http://localhost:8080/api/search/get`,
    { id: 0, rating: 1500 },
    { headers: { Authorization: `Bearer ${getToken()}` } }
  );
  return data;
});

export const join = createAsyncThunk("game/join", async ({ gameID }) => {
  //   console.log(123, getToken());
  const { data } = await axios.post(
    `http://localhost:8080/api/search/join`,
    { gameID, id: 0 },
    { headers: { Authorization: `Bearer ${getToken()}` } }
  );
  console.log(data);
  return data;
});

const initialState = {
  games: [],
  addGameStatus: "",
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: initialState,
  reducers: {
    setGames(state, action) {
      console.log(action.payload);
      state.games.push(action.payload);
    },
    clear(state) {
      state.games = [];
    },
    clearAddGameStatus(state) {
      state.addGameStatus = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addGame.pending, (state) => {
        state.status = "loading";
        state.regState = 0;
        console.log("loading");
      })
      .addCase(addGame.fulfilled, (state, action) => {
        state.status = "success";
        state.addGameStatus = "success";
        console.log("loading: success");
      })
      .addCase(addGame.rejected, (state) => {
        state.status = "error";
        console.log("loading: error");
      })
      .addCase(getGames.pending, (state) => {
        state.status = "loading";
        state.regState = 0;
        // console.log("loading");
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.status = "success";
        state.games = action.payload.list;
        // console.log("loading: success");
      })
      .addCase(getGames.rejected, (state, action) => {
        state.status = "error";
        // console.log("loading: error");
      })
      .addCase(join.pending, (state) => {
        state.status = "loading";
        state.regState = 0;
      })
      .addCase(join.fulfilled, (state, action) => {
        state.status = "success";
        console.log("success");
      })
      .addCase(join.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { setGames, clear, clearAddGameStatus } = searchSlice.actions;
export default searchSlice.reducer;
