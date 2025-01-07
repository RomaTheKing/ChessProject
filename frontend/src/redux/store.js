import { configureStore } from "@reduxjs/toolkit";
import board from "./slices/boardSlice";
import searchSlice from "./slices/searchSlice";
import messageSlice from "./slices/messageSlice";

export default configureStore({
  reducer: {
    board,
    searchSlice,
    messageSlice,
  },
});
