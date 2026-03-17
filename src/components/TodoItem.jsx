function TodoItem({ todo }) {
  return (
    <li style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
      <input type="checkbox" />
      <span>{todo.text}</span>
      <button>삭제</button>
    </li>
  );
}

export default TodoItem;
