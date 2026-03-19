import { useState } from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() === "") return;
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  return (
    <li className="flex items-center gap-[15px] mb-[12px] w-full text-left">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => toggleTodo(todo.id)}
        className="w-[18px] h-[18px] cursor-pointer shrink-0"
      />

      <strong className="text-white w-[25px] shrink-0">{index + 1}.</strong>

      {isEditing ? (
        // === [수정 모드] ===
        <div className="flex gap-[8px] flex-1">
          <input
            className="flex-1 px-2 py-1 rounded border border-gray-500 bg-[#3f3f46] text-white outline-none focus:ring-2 focus:ring-blue-400"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
            autoFocus
          />
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white border-none px-2 py-1 rounded cursor-pointer text-sm"
          >
            저장
          </button>
        </div>
      ) : (
        // === [일반 모드] ===
        <>
          <span
            className={`flex-1 text-[18px] ${
              todo.isDone ? "line-through text-red-500" : "text-white"
            }`}
          >
            {todo.text}
          </span>

          <div className="flex gap-[5px] shrink-0">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-zinc-700 text-white border-none px-2 py-1 rounded cursor-pointer text-xs"
            >
              수정
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-800 text-white border-none px-2 py-1 rounded cursor-pointer text-xs"
            >
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
