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
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        내 투두 리스트
      </h1>

      {/* 사진처럼 입력창과 버튼을 중앙 정렬하고 묶어주는 스타일 적용 */}
      <div className="mb-8 flex justify-center items-stretch">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="w-56 px-3 py-1 bg-[#3f3f46] text-white border border-[#52525b] outline-none text-sm placeholder-gray-400"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-1 bg-[#52525b] hover:bg-[#636370] text-white text-sm border border-l-0 border-[#52525b] transition-colors"
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
