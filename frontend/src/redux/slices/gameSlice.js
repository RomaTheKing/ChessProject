import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../API/api";

export const getGameId = createAsyncThunk("game/getId", async ({}) => {
  //   console.log("getGameId");
  const { data } = await axios.post(
    `http://localhost:8080/api/game/getGameId`,
    {},
    { headers: { Authorization: `Bearer ${getToken()}` } }
  );
  console.log(data);
  return data;
});

export const getGameState = createAsyncThunk(
  "game/getState",
  async ({ gameId }) => {
    const { data } = await axios.post(
      `http://localhost:8080/api/game/getState`,
      { gameId, id: 0 },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
    console.log(data);
    return data;
  }
);

export const move = createAsyncThunk(
  "game/move",
  async ({ gameId, sx, sy, fx, fy }) => {
    const { data } = await axios.post(
      `http://localhost:8080/api/game/move`,
      { gameId, sx, sy, fx, fy },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
    console.log(data);
    return data;
  }
);

const initialState = {
  gameId: -1,
  gameIdStatus: "",
  gameStateStatus: "",
  tiles: [
    [...Array(8)],
    [...Array(8)],
    [...Array(8)],
    [...Array(8)],

    [...Array(8)],
    [...Array(8)],
    [...Array(8)],
    [...Array(8)],
  ],
  whiteTime: 0,
  blackTime: 0,
  color: 0,
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGameState.pending, (state) => {
        state.status = "loading";
        state.gameStateStatus = "loading";
        state.regState = 0;
        // console.log("loading");
      })
      .addCase(getGameState.fulfilled, (state, action) => {
        state.status = "success";
        state.gameStateStatus = "success";
        // console.log(action.payload);
        state.blackTime = action.payload.blackTime;
        state.whiteTime = action.payload.whiteTime;
        state.tiles = action.payload.map;
        state.color = action.payload.color;
        // console.log("loading: success");
      })
      .addCase(getGameState.rejected, (state, action) => {
        state.gameStateStatus = "fail";
      })
      .addCase(getGameId.pending, (state) => {
        state.status = "loading";
        state.gameIdStatus = "loading";
        state.regState = 0;
        // console.log("loading");
      })
      .addCase(getGameId.fulfilled, (state, action) => {
        state.status = "success";
        state.gameId = action.payload.gameId;
        state.gameIdStatus = "success";
        // console.log("gameId: " + state.gameId);
        // console.log("loading: success");
      })
      .addCase(getGameId.rejected, (state, action) => {
        if (state.gameIdStatus !== "success") state.gameIdStatus = "";
      })
      .addCase(move.pending, (state) => {
        state.status = "loading";
        state.regState = 0;
        // console.log("loading");
      })
      .addCase(move.fulfilled, (state, action) => {
        state.status = "success";
        console.log("Move success");
      })
      .addCase(move.rejected, (state, action) => {});
  },
});

export const {} = gameSlice.actions;
export default gameSlice.reducer;
