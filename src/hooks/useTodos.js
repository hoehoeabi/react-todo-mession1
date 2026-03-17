import { useEffect, useState } from "react";
import { getStorage, setStorage } from "../utils/storage";

function useTodos() {
  const [todos, setTodos] = useState(() => getStorage("todos", []));

  useEffect(() => {
    setStorage("todos", todos);
  }, [todos]);

  const addTodo = (value) => {
    const newTodo = {
      id: Date.now(),
      text: value,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, updateTodo, toggleTodo, deleteTodo };
}

export default useTodos;
