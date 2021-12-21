import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filter }) => {
  let displayList = todos;
  if (filter === "completed") {
    displayList = todos.filter((task) => task.completed === true);
  } else if (filter === "uncompleted") {
    displayList = todos.filter((task) => task.completed === false);
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {displayList.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            task={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
