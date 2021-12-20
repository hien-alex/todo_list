import React from "react";

const Todo = ({ todos, task, setTodos, todo }) => {
  const removeTask = () => {
    setTodos(todos.filter((task) => task.id !== todo.id));
  };

  const completeTask = () => {
    setTodos(
      todos.map((task) => {
        if (task.id === todo.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {task}
      </li>
      <button onClick={completeTask} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={removeTask} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
