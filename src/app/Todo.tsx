"use client";

import { TodoShape } from "@/hooks/useTodos";
import Link from "next/link";
import { useCallback, useState } from "react";

interface TodoProps {
  readonly todo: TodoShape;
  readonly toggleIsDone: (id: string) => void;
  readonly updateTodo: (id: string, text: string) => void;
  readonly clearTodo: (id: string) => void;
}

export default function Todo({ todo, toggleIsDone, clearTodo }: TodoProps) {
  const onCheckboxChange = useCallback(
    (id: string) => () => {
      toggleIsDone(id);
    },
    [toggleIsDone]
  );

  const onClearTodoClick = useCallback(
    (id: string) => () => {
      clearTodo(id);
    },
    [clearTodo]
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "1rem",
      }}
    >
      <label htmlFor="check">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={onCheckboxChange(todo.id)}
        ></input>
        {todo.isDone ? <s>{todo.text}</s> : <strong>{todo.text}</strong>}
      </label>
      <div>
        <button
          onClick={onClearTodoClick(todo.id)}
          type="button"
          className="secondary outline"
          role="button"
        >
          ×
        </button>
      </div>
    </div>
  );
}
