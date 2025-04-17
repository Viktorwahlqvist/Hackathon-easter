import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlices = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        task: action.payload,
        id: nanoid(),
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export default todoSlices.reducer;
export const { addTodo, removeTodo, toggleTodo } = todoSlices.actions;
