import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// creating store

export const store = configureStore({
  reducer: todoReducer, // this is reducer
});
