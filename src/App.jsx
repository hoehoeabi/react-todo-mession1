import React, { useState } from "react";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";
import "./App.css";

function App() {
  const { todos, addTodo, updateTodo, toggleTodo, deleteTodo } = useTodos();

  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim() === "") return;
    addTodo(inputText);
    setInputText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>내 투두 리스트</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd}>추가</button>
      </div>

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
