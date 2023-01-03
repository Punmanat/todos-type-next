import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    todo: todoSlice,
  },
});