import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  updateTodo,
}) {
  return (
    <ul
      className="list-none p-0 m-0 flex flex-col items-start"
      style={{ listStyleType: "none", padding: 0 }} // 테일윈드 안 먹을 때를 대비한 보험
    >
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
