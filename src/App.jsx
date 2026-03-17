import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, addTodo, updateTodo, toggleTodo, deleteTodo } = useTodos();
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim() === "") return;
    addTodo(inputText);
    setInputText("");
  };

  return (
    <div className="p-5 max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        내 투두 리스트
      </h1>

      <div className="mb-5 flex gap-2">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="flex-1 px-3 py-2 text-black rounded outline-none"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold transition-colors"
        >
          추가
        </button>
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
