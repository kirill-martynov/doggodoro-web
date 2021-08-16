import * as React from "react";
import cn from "classnames";

import { Button } from "../../../../core/components/Button";

import { Circle } from "../../../../core/components/Circle";
import { Icon } from "../../../../core/components/Icon";
import { TASK_LIST } from "../TaskList/TaskList";

import s from "./Timer.module.css";

export const Timer = () => {
  const [currentTask, setCurrentTask] = React.useState<string>("");

  const handleDecreaseTime = () => {
    console.log("decrease time");
  };

  const handleIncreaseTime = () => {
    console.log("increase time");
  };

  const handleTimer = () => {
    console.log("handleTimer", handleTimer);
  };

  const handleCurrentTask = (task: string) => {
    const isCurrentTask = task === currentTask;

    if (isCurrentTask) {
      setCurrentTask("");

      return;
    }

    setCurrentTask(task);
  };

  return (
    <div className={s.timer}>
      <h2 className={s.title}>Timer:</h2>

      <div className={s.content}>
        <Circle progress={80} size={280} />

        <h4 className={s.subtitle}>
          Current task: <span>{currentTask}</span>
        </h4>

        <ul className={s.tasks}>
          {TASK_LIST.slice(0, 3).map((task, index) => (
            <li
              key={`${task.name}+${index}`}
              className={cn(s.task, {
                [s.active]: currentTask === task.name,
              })}
              onClick={() => handleCurrentTask(task.name)}
            >
              <span className={s.taskType}>{task.type}</span>
              <span className={s.taskName}>{task.name}</span>
            </li>
          ))}
          <li className={s.more}>+{TASK_LIST.slice(3).length}</li>
        </ul>

        <Button className={s.timerStartButton} onClick={handleTimer}>
          Start
        </Button>
      </div>
    </div>
  );
};
