import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";
import React, { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(
    localStorage.getItem("todos") !== null
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>Alex's Tasks</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setInputText={setInputText}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList filter={filter} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
