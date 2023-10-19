import { useState } from "react";

export function useTodo(initialItems?: string[]) {
  const [todos, setTodos] = useState<string[]>(initialItems || []);

  const addItem = () => {
    setTodos((prevTodos) => [...prevTodos, "New todo"]);
  };

  const deleteItem = (index: number) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  return {
    todos,
    addTodo: addItem,
    deleteTodo: deleteItem,
  };
}


