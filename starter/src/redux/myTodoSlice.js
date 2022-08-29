import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// use createAsyncThunk to create the middleware for making api calls

// middleware
export const getTodoAsync = createAsyncThunk("todos/getTodoAsync", async () => {
  const response = await fetch("http://localhost:7000/todos");
  // if the api call is successful
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});


export const myTodoSlice = createSlice({
  name: "todos",
  initialState: [
    // { id: 1, title: "todo1", completed: false },
    // { id: 2, title: "todo2", completed: false },
    // { id: 3, title: "todo3", completed: true },
    // { id: 4, title: "todo4", completed: false },
    // { id: 5, title: "todo5", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    // toggle todo reducer
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    // delete todo redcuer
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  // add extra reducers
  extraReducers:{
    [getTodoAsync.fulfilled] : (state, action)=>{
      return action.payload.todos
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo } = myTodoSlice.actions;
export default myTodoSlice.reducer;
