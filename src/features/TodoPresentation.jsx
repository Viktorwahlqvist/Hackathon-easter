import React from "react";

const TodoPresentation = ({ todos, toggle, remove }) => {
  return (
    <div
      className="m-3"
      initial={{ opacity: 0, y: 0, x: -10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -10, x: -10 }}
    >
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li className="flex items-center" key={todo.id}>
                <p
                  className={`text-4xl text-black flex-1 ${
                    todo.completed ? "line-through opacity-30" : ""
                  }`}
                >
                  🐰🥚 {todo.task}
                </p>
                <button
                  className="text-green-400"
                  onClick={() => toggle(todo.id)}
                >
                  {todo.completed ? "⟳" : "✔️"}
                </button>
                <button onClick={() => remove(todo.id)}>❌</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoPresentation;
