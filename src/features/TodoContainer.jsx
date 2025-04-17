import React, { useState } from "react";
import { addTodo, removeTodo, toggleTodo } from "./TodoSlices";
import { useDispatch, useSelector } from "react-redux";
import TodoPresentation from "./TodoPresentation";

const TodoContainer = () => {
  const [content, setContent] = useState("");
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(content));
    setContent("");
  };

  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <div className="p-1 rounded-full bg-red-500">
          <div className="p-1 rounded-full bg-orange-500">
            <div className="p-1 rounded-full bg-yellow-400">
              <div className="p-1 rounded-full bg-green-500">
                <div className="p-1 rounded-full bg-blue-500">
                  <div className="p-1 rounded-full bg-purple-600">
                    <input
                      type="text"
                      className="bg-blue-200 text-black h-14 w-80 rounded-full text-center outline-none"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="ml-4 text-black"
          onClick={handleSubmit}
        >
          Add task
        </button>
      </div>
      <TodoPresentation
        todos={todo}
        toggle={(id) => dispatch(toggleTodo(id))}
        remove={(id) => dispatch(removeTodo(id))}
      />
    </>
  );
};

export default TodoContainer;
