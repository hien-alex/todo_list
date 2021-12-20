import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

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
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
