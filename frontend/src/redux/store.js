import { configureStore } from "@reduxjs/toolkit";
import board from "./slices/boardSlice";

export default configureStore({
  reducer: {
    board,
  },
});
