import * as React from "react";
import { Button } from "../../../../core/components/Button";
import { Icon } from "../../../../core/components/Icon";

import { Task } from "../Task/Task";

import s from "./TaskList.module.css";

export const TASK_LIST = [
  { type: "💊", name: "Health" },
  { type: "📚", name: "Study" },
  { type: "💻", name: "Work" },
  { type: "🏋️‍♀️", name: "Gym" },
];

export const TaskList = () => {
  const handleAddTask = () => {
    console.log("add task");
  };

  return (
    <div className={s.taskList}>
      <div className={s.header}>
        <h2 className={s.title}>Tasks:</h2>
        {/* <span className={s.info}>{TASK_LIST.length}</span> */}
      </div>

      <ul className={s.content}>
        {TASK_LIST.map((task, index: number) => (
          <Task
            key={`${task.name}+${index}`}
            name={task.name}
            type={task.type}
          />
        ))}
      </ul>

      <div className={s.actions}>
        <Button className={s.addTaskButton} onClick={handleAddTask}>
          <Icon name="plus" width="14" height="14" />
        </Button>
      </div>
    </div>
  );
};
