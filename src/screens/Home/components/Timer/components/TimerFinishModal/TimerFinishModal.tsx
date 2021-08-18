import * as React from "react";
import { useSelector } from "react-redux";

import { Modal } from "@core/components/Modal";

import { getCurrentTaskSelector } from "@Home/state/tasks/selectors/tasksSelectors";

import s from "./TimerFinishModal.module.css";

interface IProps {
  show: boolean;

  onHide: () => void;
  onConfirm: () => void;
}

export const TimerFinishModal = ({ show, onHide, onConfirm }: IProps) => {
  const currentTask = useSelector(getCurrentTaskSelector);

  const hasCurrentTask = Object.keys(currentTask).length;

  const handleConfirm = () => {
    onConfirm();

    onHide();
  };

  return (
    <Modal
      className={s.timerFinishModal}
      show={show}
      buttons={{ confirm: { text: "Woof!" }, cancel: { on: false } }}
      onConfirm={handleConfirm}
      onClose={onHide}
    >
      <div>
        {hasCurrentTask ? (
          <span className={s.task}>
            <span className={s.taskType}>
              <img src={currentTask.type} alt="icon" />
            </span>
            <span className={s.taskName}>
              You've spent some time on: {currentTask.name}
            </span>
          </span>
        ) : (
          <span className={s.empty}>
            <span className={s.icon}>🤷‍♂️</span>
            <span className={s.text}>You didn't track your time!</span>
          </span>
        )}
      </div>
    </Modal>
  );
};
