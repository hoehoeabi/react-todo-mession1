import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const dummyTodos = [
    { id: 1, text: "리액트 컴포넌트 분리하기", isDone: false },
    { id: 2, text: "Props 개념 이해하기", isDone: false },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>내 투두 리스트</h1>

      <div style={{ marginBottom: "20px" }}>
        <input type="text" placeholder="할 일을 입력하세요" />
        <button>추가</button>
      </div>

      <TodoList todos={dummyTodos} />
    </div>
  );
}

export default App;
