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

export const auth = createAsyncThunk(
  "reg/AddUser",
  async ({ userName, email, password }) => {
    console.log(userName, email, password);
    const { data } = await axios.post(`http://localhost:8080/api/auth/login`, {
      email,
      password,
    });
    console.log(data);
    return data;
  }
);

const initialState = {
  token: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state) => {
        state.status = "loading";
        // state.messege = [];
        console.log("loading");
      })
      .addCase(regUser.fulfilled, (state, action) => {
        // state.items = action.payload;
        state.token = action.payload.token;
        state.status = "success";
        console.log("loading: success");
        console.log("token:" + state.token);
      })
      .addCase(regUser.rejected, (state) => {
        state.status = "error";
        // state.items = [];
        console.log("loading: error");
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
