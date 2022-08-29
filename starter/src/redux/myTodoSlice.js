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

// creare todo and persist it on the api
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const response = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: payload.title }),
    });
    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

// toogle todo on api
export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: payload.completed }),
    });
    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

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
  extraReducers: {
    [getTodoAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },

    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.todo.completed;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = myTodoSlice.actions;
export default myTodoSlice.reducer;
