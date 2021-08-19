import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import cn from "classnames";

import { ICONS } from "src/data/tasks";

import { Modal } from "@core/components/Modal";
import { Input } from "@core/components/Input";

import { addTask, editTask } from "@Home/state/tasks/thunks/tasksThunks";
import { getTasksEditorTaskSelector } from "@screens/Home/state/tasks/selectors/tasksSelectors";

import s from "./TaskEditorModal.module.css";
import { randomInt } from "crypto";

const PATH = "/assets/categories";

interface IProps {
  show: boolean;

  onHide: () => void;
}

export const TaskEditorModal = ({ show, onHide }: IProps) => {
  const dispatch = useDispatch();

  const [task, setTask] = React.useState({
    type: "",
    name: "",
  });
  const [error, setError] = React.useState("");

  const editorTask = useSelector(getTasksEditorTaskSelector);

  const isEdit = Object.keys(editorTask).length;

  React.useEffect(() => {
    if (isEdit) {
      setTask(editorTask);
    }
  }, [editorTask]);

  React.useEffect(() => {
    if (!show) {
      setTask({ type: "", name: "" });
    }
  }, [show]);

  const handleUpdateTask = (field: string, value: string) => {
    if (error) {
      setError("");
    }

    const data = { ...task, [field]: value };

    setTask(data);
  };

  const handleTask = () => {
    let data: any = {
      ...task,
    };

    if (!data.name) {
      setError("Name field empty");

      return;
    }

    if (!data.type) {
      const randomIcon = Math.floor(Math.random() * ICONS.length);

      data = { ...data, type: `${PATH}/${randomIcon}.png` };
    }

    if (isEdit) {
      dispatch(editTask(data));
    }

    if (!isEdit) {
      data = { ...data, id: uuidv4() };

      dispatch(addTask(data));
    }

    onHide();
  };

  return (
    <Modal
      show={show}
      title={isEdit ? "Edit task" : "Create task:"}
      onConfirm={handleTask}
      onClose={onHide}
      buttons={{ confirm: { text: isEdit ? "Save" : "Create" } }}
    >
      <div className={s.modalIcons}>
        <h4 className={s.modalIconsTitle}>Icon:</h4>
        <ul className={s.modalIconsList}>
          {ICONS.map((icon: string) => (
            <li
              key={icon}
              className={cn(s.modalIconsItem, {
                [s.active]: `${PATH}/${icon}` === task.type,
              })}
              onClick={() => handleUpdateTask("type", `${PATH}/${icon}`)}
            >
              <img src={`${PATH}/${icon}`} alt="icon" />
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
          error={error}
          onChange={handleUpdateTask}
        />
      </div>
    </Modal>
  );
};
