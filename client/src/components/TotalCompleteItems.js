import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return <h4>Total Complete Items: {todos.length}</h4>;
};

export default TotalCompleteItems;
