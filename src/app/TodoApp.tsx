"use client";

import useTodos from "@/hooks/useTodos";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

export default function TodoApp() {
  const { todos, addTodo, updateTodo, toggleIsDone, clearTodo } = useTodos();

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleIsDone={toggleIsDone}
          updateTodo={updateTodo}
          clearTodo={clearTodo}
        />
      ))}
    </div>
  );
}
