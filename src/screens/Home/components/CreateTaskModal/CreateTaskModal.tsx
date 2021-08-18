import * as React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import cn from "classnames";

import { ICONS } from "src/data/tasks";

import { Modal } from "@core/components/Modal";
import { Input } from "@core/components/Input";

import { addTask } from "@Home/state/tasks/thunks/tasksThunks";

import s from "./CreateTaskModal.module.css";

interface IProps {
  show: boolean;

  onHide: () => void;
}

export const CreateTaskModal = ({ show, onHide }: IProps) => {
  const dispatch = useDispatch();

  const [task, setTask] = React.useState({
    type: "",
    name: "",
  });

  const handleUpdateTask = (field: string, value: string) => {
    const data = { ...task, [field]: value };

    setTask(data);
  };

  const handleAddTask = () => {
    const data = {
      ...task,
      id: uuidv4(),
      type: `/assets/categories/${task.type}`,
    };

    dispatch(addTask(data));

    onHide();
  };
  return (
    <Modal
      show={show}
      title={"Create task:"}
      onConfirm={handleAddTask}
      onClose={onHide}
    >
      <div className={s.modalIcons}>
        <h4 className={s.modalIconsTitle}>Icon:</h4>
        <ul className={s.modalIconsList}>
          {ICONS.map((icon: string) => (
            <li
              key={icon}
              className={cn(s.modalIconsItem, {
                [s.active]: icon === task.type,
              })}
              onClick={() => handleUpdateTask("type", icon)}
            >
              <img src={`/assets/categories/${icon}`} alt="icon" />
            </li>
          ))}
        </ul>
      </div>
      <div className={s.modalField}>
        <Input
          title="Name"
          name="name"
          placeholder="Enter task name"
          value={task.name}
          onChange={handleUpdateTask}
        />
      </div>
    </Modal>
  );
};
