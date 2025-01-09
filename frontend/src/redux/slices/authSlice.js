import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "../../API/api";

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
  status: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    clearState(state, action) {
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.token = action.payload.token;
        setToken(state.token);
        state.status = "success";
        console.log("token:" + state.token);
      })
      .addCase(auth.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
