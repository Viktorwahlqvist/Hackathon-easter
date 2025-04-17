import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoSlices";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
