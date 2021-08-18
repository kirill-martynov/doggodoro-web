import * as React from "react";
import { useSelector } from "react-redux";

import { Button } from "@core/components/Button";
import { Icon } from "@core/components/Icon";

import { getTasksListSelector } from "@Home/state/tasks/selectors/tasksSelectors";

import { Task } from "../Task";
import { CreateTaskModal } from "../CreateTaskModal";

import s from "./TaskList.module.css";

export const TaskList = () => {
  const [modal, showModal] = React.useState<boolean>(false);

  const tasks = useSelector(getTasksListSelector);

  return (
    <div className={s.taskList}>
      <div className={s.header}>
        <h2 className={s.title}>Tasks:</h2>
      </div>

      <ul className={s.content}>
        {tasks.map((task: any) => (
          <Task key={task.id} id={task.id} name={task.name} type={task.type} />
        ))}
      </ul>

      <div className={s.actions}>
        <Button className={s.addTaskButton} onClick={() => showModal(true)}>
          <Icon name="plus" width="14" height="14" />
        </Button>
      </div>

      <CreateTaskModal show={modal} onHide={() => showModal(false)} />
    </div>
  );
};
