"use client";

import { TodoShape } from "@/hooks/useTodos";
import { useCallback, useState } from "react";

interface TodoProps {
  readonly todo: TodoShape;
  readonly toggleIsDone: (id: string) => void;
  readonly updateTodo: (id: string, text: string) => void;
  readonly clearTodo: (id: string) => void;
}

export default function Todo({
  todo,
  toggleIsDone,
  updateTodo,
  clearTodo,
}: TodoProps) {
  const [editValue, setEditValue] = useState<string>(todo.text);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const editTodo = useCallback(
    (event?: React.MouseEvent<HTMLInputElement>) => {
      const target = event ? (event.target as HTMLInputElement) : undefined;
      if (target) {
        target.setSelectionRange(target.value.length, target.value.length);
      }
      setIsEdit(true);
      setEditValue(todo.text);
    },
    [todo.text]
  );

  const endEdit = useCallback(() => {
    if (isEdit) {
      updateTodo(todo.id, editValue);

      setIsEdit(false);
    }
  }, [editValue, isEdit, todo.id, updateTodo]);

  const onSubmitEditingTodo = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        endEdit();
      }
    },
    [endEdit]
  );

  const onCheckboxChange = useCallback(
    (id: string) => () => {
      toggleIsDone(id);
    },
    [toggleIsDone]
  );

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditValue(event.target.value);
    },
    []
  );

  const onClearTodoClick = useCallback(
    (id: string) => () => {
      clearTodo(id);
    },
    [clearTodo]
  );

  const onEditButtonClick = useCallback(() => {
    editTodo();
  }, [editTodo]);

  return (
    <div className="grid">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={onCheckboxChange(todo.id)}
      ></input>
      <input
        value={editValue}
        readOnly={!isEdit}
        onBlur={endEdit}
        onChange={onInputChange}
        onDoubleClick={editTodo}
        onKeyDown={onSubmitEditingTodo}
      />
      <button onClick={onEditButtonClick} type="button" className="outline">
        ✎
      </button>
      <button
        onClick={onClearTodoClick(todo.id)}
        type="button"
        className="outline"
      >
        ×
      </button>{" "}
    </div>
  );
}
