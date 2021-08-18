import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { tasksActions } from "../../../../state/tasks/actions/tasksActions";
import {
  getCurrentTaskSelector,
  getTasksListSelector,
} from "../../../../state/tasks/selectors/tasksSelectors";

import s from "./TimerRecentTasks.module.css";

export const TimerRecentTasks = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(getTasksListSelector);
  const currentTask = useSelector(getCurrentTaskSelector);

  const handleCurrentTask = (task: any) => {
    const isCurrentTask = task.id === currentTask.id;

    if (isCurrentTask) {
      dispatch(tasksActions.setCurrentTask({}));

      return;
    }

    dispatch(tasksActions.setCurrentTask(task));
  };

  return (
    <ul className={s.tasks}>
      {tasks.slice(0, 3).map((task: any, index: number) => (
        <li
          key={`${task.name}+${index}`}
          className={cn(s.task, {
            [s.active]: currentTask.id === task.id,
          })}
          onClick={() => handleCurrentTask(task)}
        >
          <span className={s.taskType}>
            <img src={task.type} alt="icon" />
          </span>
          <span className={s.taskName}>{task.name}</span>
        </li>
      ))}

      {tasks.length > 3 && <li className={s.more}>+{tasks.slice(3).length}</li>}
    </ul>
  );
};
