import { configureStore } from "@reduxjs/toolkit";
import board from "./slices/boardSlice";
import searchSlice from "./slices/searchSlice";
import messageSlice from "./slices/messageSlice";
import regSlice from "./slices/regSlices";
import authSlice from "./slices/authSlice";
import gameSlice from "./slices/gameSlice";

export default configureStore({
  reducer: {
    board,
    searchSlice,
    messageSlice,
    regSlice,
    authSlice,
    gameSlice,
  },
});
