import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMessage = createAsyncThunk(
  "pizzas/getPizzasStatus",
  async ({ mes }) => {
    const { data } = await axios.post(`http://localhost:8080/api/mes/add`, {
      id: 1,
      message: mes || "",
    });
    console.log(data);
    return data;
  }
);

const initialState = {
  messages: [],
};

const messageSlice = createSlice({
  name: "messageSlice",
  initialState: initialState,
  reducers: {
    addMessage(state, action) {
      //   console.log(action.payload);
      //   state.games.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
        // state.messege = [];
        console.log("loading");
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        // state.items = action.payload;
        state.status = "success";
        console.log("loading: success");
      })
      .addCase(sendMessage.rejected, (state) => {
        state.status = "error";
        // state.items = [];
        console.log("loading: error");
      });
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
