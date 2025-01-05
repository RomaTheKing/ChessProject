import { configureStore } from "@reduxjs/toolkit";
import board from "./slices/boardSlice";
import searchSlice from "./slices/searchSlice";

export default configureStore({
  reducer: {
    board,
    searchSlice,
  },
});
