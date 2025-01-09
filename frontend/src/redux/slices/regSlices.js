import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const regUser = createAsyncThunk(
  "reg/AddUser",
  async ({ userName, email, password }) => {
    console.log(userName, email, password);
    const { data } = await axios.post(`http://localhost:8080/api/reg/add`, {
      userName,
      email,
      password,
    });
    console.log(data);
    return data;
  }
);

const initialState = {
  regState: 0,
};

const regSlice = createSlice({
  name: "regSlice",
  initialState: initialState,
  reducers: {
    clearState(state, action) {
      state.regState = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state) => {
        state.status = "loading";
        state.regState = 0;
        console.log("loading");
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.regState = 1;
        state.status = "success";
        console.log("loading: success");
      })
      .addCase(regUser.rejected, (state) => {
        state.regState = -1;
        state.status = "error";
        console.log("loading: error");
      });
  },
});

export const { clearState } = regSlice.actions;
export default regSlice.reducer;
