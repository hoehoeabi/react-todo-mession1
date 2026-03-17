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
    <li
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "8px",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => toggleTodo(todo.id)}
      />

      <strong>{index + 1}.</strong>

      {isEditing ? (
        // === [수정 모드 일 때 보여줄 화면] ===
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
          />
          <button onClick={handleUpdate}>저장</button>{" "}
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        // === [일반 모드 일 때 보여줄 화면] ===
        <>
          <span
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
              color: todo.isDone ? "red" : "white",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
