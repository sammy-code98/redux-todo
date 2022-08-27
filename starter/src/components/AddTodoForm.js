import React, { useState } from "react";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered: " + value);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className=" flex flex-row items-center justify-between mt-4">
        <label className="sr-only">Name</label>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>

        <button
          type="submit"
          className="w-1/2 text-center py-3 ml-6 rounded bg-green-600 mb-4 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
