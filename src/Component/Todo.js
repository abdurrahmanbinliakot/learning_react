import React, { useState } from "react";

export default function Todo() {
  const [todo, changTodo] = useState("");
  const [warning, changWarning] = useState("");
  const handleInput = (event) => {
    const inputValue = event.target.value;
    const updateWarning = inputValue.includes("Django")
      ? "You have to learn python for learning Django"
      : null;
    changTodo(inputValue);
    changWarning(updateWarning);
  };

  return (
    <div>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>
      <hr />
      <p>{todo}</p>
      <h2>{warning || "You are Nobe! "}</h2>
    </div>
  );
}
