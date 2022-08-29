import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./myTodoSlice";
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
