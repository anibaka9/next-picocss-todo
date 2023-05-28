import { useCallback, useState } from "react";

interface TodoInputProps {
  readonly addTodo: (text: string) => void;
}
export default function TodoInput({ addTodo }: TodoInputProps) {
  const [value, setValue] = useState<string>("");

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        addTodo(value);
        setValue("");
      }
    },
    [addTodo, value]
  );
  return (
    <input
      onChange={onInputChange}
      onKeyDown={onSubmit}
      placeholder="Whats needs to be done?"
      value={value}
    />
  );
}
