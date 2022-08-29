import { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync } from "../redux/myTodoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // now dipatch the api call here
  useEffect(() => {
    dispatch(getTodoAsync());
  },[dispatch]);

  // const todos = [
  //   { id: 1, title: "todo1", completed: true },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: true },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: false },
  // ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
