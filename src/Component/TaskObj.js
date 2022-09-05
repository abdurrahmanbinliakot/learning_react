import React, { useState } from "react";

export default function TaskObj() {
  const [task, changeTask] = useState({
    task_1: "",
    task_2: "",
  });
  const { task_1, task_2 } = task;
  return (
    <div>
      <p>
        <input
          type="text"
          value={task_1}
          onChange={(event) => {
            changeTask({
                ...task,
                task_1:event.target.value,
            });
          }}
        />
        <h2>Task_1: {task_1}</h2>
      </p>
      <hr />

      <p>
        <input
          type="text"
          value={task_2}
          onChange={(event) => {
            
            changeTask({
                ...task,
                task_2:event.target.value,
            });
          }}
        />
      </p>

      <h2>Task_2: {task_2}</h2>
    </div>
  );
}
