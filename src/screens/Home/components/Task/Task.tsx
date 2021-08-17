import * as React from "react"
import { useDispatch } from "react-redux";
import { Button } from "../../../../core/components/Button";
import { Icon } from "../../../../core/components/Icon";
import { removeTask } from "../../state/tasks/thunks/tasksThunks";

import s from "./Task.module.css";

interface IProps {
  id: string | number;
  name: string;
  type: string;
}

export const Task = ({ id, name, type }: IProps) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(removeTask(id))
  }

  return (
    <li className={s.task}>
      <span className={s.type}>{type}</span>
      <span className={s.name}>{name}</span>

      <div className={s.actions}>
        <Button theme="invisible" onClick={handleDeleteTask}>
          <Icon name="trash" width="16" height="16" />
        </Button>
      </div>
    </li>
  )
}
