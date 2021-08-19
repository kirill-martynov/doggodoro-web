import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@core/components/Button";
import { Icon } from "@core/components/Icon";

import { getTasksListSelector } from "@Home/state/tasks/selectors/tasksSelectors";

import { Task } from "../Task";
import { TaskEditorModal } from "../TaskEditorModal";

import s from "./TaskList.module.css";
import { tasksActions } from "@screens/Home/state/tasks/actions/tasksActions";

export const TaskList = () => {
  const dispatch = useDispatch();

  const [modal, showModal] = React.useState<boolean>(false);

  const tasks = useSelector(getTasksListSelector);

  // TODO: Добавить типы для task
  const handleTask = (type: string, task?: any) => {
    let data = {};

    if (type === 'edit') data = task;

    dispatch(tasksActions.setEditorTask(data));
    showModal(true);
  };

  return (
    <div className={s.taskList}>
      <div className={s.header}>
        <h2 className={s.title}>Tasks:</h2>
      </div>

      <ul className={s.content}>
        {tasks.map((task: any) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            type={task.type}
            onEdit={handleTask}
          />
        ))}
      </ul>

      <div className={s.actions}>
        <Button className={s.addTaskButton} onClick={() => handleTask('add')}>
          <Icon name="plus" width="14" height="14" />
        </Button>
      </div>

      <TaskEditorModal show={modal} onHide={() => showModal(false)} />
    </div>
  );
};
