import React, { useState } from "react";

export default function Task() {
  const [task_1, changeTask_1] = useState("");
  const [task_2, changeTask_2] = useState("");
  return (
    <div>
      <p>
        <input
          type="text"
          value={task_1}
          onChange={(event) => {
            const upttask_1 = event.target.value;
            changeTask_1(upttask_1);
          }}
        />
        <h2>{task_1}</h2>
      </p>
      <hr />

      <p>
        <input
          type="text"
          value={task_2}
          onChange={(event) => {
            const upttask_2 = event.target.value;
            changeTask_2(upttask_2);
          }}
        />
      </p>

      <h2>{task_2}</h2>
    </div>
  );
}
