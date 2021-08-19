import * as React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../core/components/Button";
import { Icon } from "../../../../core/components/Icon";
import { removeTask } from "../../state/tasks/thunks/tasksThunks";

import s from "./Task.module.css";

interface IProps {
  id: string | number;
  name: string;
  type: string;

  onEdit: (type: string, task: any) => void;
}

export const Task = ({ id, name, type, onEdit }: IProps) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(removeTask(id));
  };

  const handleEditTask = () => {
    onEdit('edit', { id, type, name });
  };

  return (
    <li className={s.task}>
      <span className={s.type}>
        <img src={type} alt="icon" />
      </span>
      <span className={s.name}>{name}</span>

      <div className={s.actions}>
        <Button theme="invisible" onClick={handleEditTask}>
          <Icon name="edit" width="16" height="16" />
        </Button>
        <Button theme="invisible" onClick={handleDeleteTask}>
          <Icon name="trash" width="16" height="16" />
        </Button>
      </div>
    </li>
  );
};
