import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import { Button } from "../../../../core/components/Button";
import { Icon } from "../../../../core/components/Icon";
import { useModal } from "../../../../core/hooks/modal/useModal";
import { ICONS } from "../../../../data/tasks";
import { getTasksListSelector } from "../../state/tasks/selectors/tasksSelectors";
import { addTask } from "../../state/tasks/thunks/tasksThunks";

import { Task } from "../Task/Task";

import s from "./TaskList.module.css";

export const TaskList = () => {
  const dispatch = useDispatch();

  const { show, hide, Modal } = useModal();

  const tasks = useSelector(getTasksListSelector);

  const handleAddTask = () => {
    show();
    // const task = {
    //   id: uuidv4(),
    //   type: '',
    //   name: '',
    // }

    // dispatch(addTask(task))
  };

  return (
    <div className={s.taskList}>
      <div className={s.header}>
        <h2 className={s.title}>Tasks:</h2>
      </div>

      <ul className={s.content}>
        {tasks.map((task: any, index: number) => (
          <Task
            key={task.id}
            id={task.id}
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

      <Modal title={'Create task:'}>
        <div className={s.modalIcons}>
          <h4 className={s.modalIconsTitle}>Icon:</h4>
          <ul className={s.modalIconsList}>
            {ICONS.map((icon: string) => (
            <li key={icon} className={s.modalIconsItem}>
              <img src={`/assets/categories/${icon}`} alt="icon" />
            </li>
            ))}
          </ul>
        </div>
        <div className={s.modalField}>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter task name" />
        </div>
      </Modal>
    </div>
  );
};
