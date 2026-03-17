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
        alignItems: "center",
        gap: "15px",
        marginBottom: "12px",
        width: "100%",
        textAlign: "left",
      }}
    >
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => toggleTodo(todo.id)}
        style={{
          width: "18px",
          height: "18px",
          cursor: "pointer",
          flexShrink: 0,
        }}
      />

      <strong style={{ color: "white", width: "25px", flexShrink: 0 }}>
        {index + 1}.
      </strong>

      {isEditing ? (
        // === [수정 모드] ===
        <div style={{ display: "flex", gap: "8px", flex: 1 }}>
          <input
            style={{
              flex: 1,
              padding: "4px 8px",
              borderRadius: "4px",
              border: "none",
              color: "white",
            }}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
          />
          <button
            onClick={handleUpdate}
            style={{
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              padding: "4px 8px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            저장
          </button>
        </div>
      ) : (
        // === [일반 모드] ===
        <>
          <span
            style={{
              flex: 1,
              fontSize: "18px",
              textDecoration: todo.isDone ? "line-through" : "none",
              color: todo.isDone ? "#ef4444" : "white",
            }}
          >
            {todo.text}
          </span>

          <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                backgroundColor: "#3f3f46",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              수정
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                backgroundColor: "#991b1b",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
              }}
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
