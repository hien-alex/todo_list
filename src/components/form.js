import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText, setFilter }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random(500000) },
    ]);
    setInputText("");
  };

  const searchByFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        placeholder="Enter Task"
        type="text"
        className="todo-input"
        value={inputText}
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={searchByFilter} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
