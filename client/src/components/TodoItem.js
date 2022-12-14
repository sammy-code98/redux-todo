import { useDispatch } from "react-redux";
import {
  // toggleComplete,
  // deleteTodo,
  toggleCompleteAsync,
  deleteTodoAsync,
} from "../redux/myTodoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckBox = () => {
    // dispatch(toggleComplete({ id, completed: !completed }));
    dispatch(toggleCompleteAsync({ id, completed: !completed }));
  };
  const handleDelete = () => {
    // dispatch(deleteTodo({ id }));
    dispatch(deleteTodoAsync({ id }));
  };
  return (
    <li className={`border mb-4 px-2 ${completed && "bg-green-600"}`}>
      <div className="flex justify-between">
        <span className="flex items-center">
          <input
            type="checkbox"
            className="mr-3"
            onClick={handleCheckBox}
            checked={completed}
          ></input>
          {title}
        </span>
        <button
          className="mt-4 py-3  px-3 ml-6 rounded bg-red-600 mb-4 text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
