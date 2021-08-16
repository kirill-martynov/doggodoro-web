import * as React from "react"
import { Button } from "../../../../core/components/Button";
import { Icon } from "../../../../core/components/Icon";

import s from "./Task.module.css";

interface IProps {
  name: string;
  type: string;
}

export const Task = ({ name, type }: IProps) => {
  const handleDeleteTask = () => {
    console.log('handleDeleteTask')
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
