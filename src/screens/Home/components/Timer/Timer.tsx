import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@core/components/Button";
import { Circle } from "@core/components/Circle";

import { timerActions } from "@Home/state/timer/actions/timerActions";
import {
  getTimerCircleStrokeColorSelector,
  getTimerStatusSelector,
  getTimerWorkTimeSelector,
} from "@Home/state/timer/selectors/timerSelectors";
import { getCurrentTaskSelector } from "@Home/state/tasks/selectors/tasksSelectors";

import {
  convertMillisToMinutes,
  convertMinutesToMillis,
  convertTimeToProgress,
} from "./timerUtils";
import { TimerRecentTasks } from "./components/TimerRecentTasks";
import { TimerFinishModal } from "./components/TimerFinishModal";

import s from "./Timer.module.css";

export const Timer = () => {
  const dispatch = useDispatch();

  const interval = React.useRef<any>(null);

  const [timer, setTimer] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);
  const [timerFinishModal, showTimerFinishModal] =
    React.useState<boolean>(false);

  const timerStatus = useSelector(getTimerStatusSelector);
  const timerWorkTime = useSelector(getTimerWorkTimeSelector);
  const circleStrokeColor = useSelector(getTimerCircleStrokeColorSelector);
  const currentTask = useSelector(getCurrentTaskSelector);

  const hasCurrentTask = Boolean(Object.keys(currentTask).length);

  const time = convertMinutesToMillis(timerWorkTime);
  const minutes = convertMillisToMinutes(timer);

  React.useEffect(() => {
    setTimer(time);
  }, []);

  const updateTimer = () => {
    setTimer((prevState: number) => {
      if (prevState <= 0) {
        clearInterval(interval.current);

        interval.current = null;

        showTimerFinishModal(true);

        return prevState;
      }

      const currentTime = prevState - 1000;
      const currentProgress = convertTimeToProgress(currentTime, time);

      setProgress(currentProgress);

      return currentTime;
    });
  };

  const handleTimer = () => {
    const hasStarted = interval.current;

    if (hasStarted) {
      resetTimer();

      clearInterval(interval.current);

      interval.current = null;

      return;
    }

    dispatch(timerActions.setTimerStatus());

    interval.current = setInterval(updateTimer, 1000);
  };

  const resetTimer = () => {
    setTimer(time);
    setProgress(0);

    dispatch(timerActions.setTimerStatus());
  }

  const handleTimerFinishModal = () => resetTimer();

  return (
    <div className={s.timer}>
      <h2 className={s.title}>Timer:</h2>

      <div className={s.content}>
        <Circle
          time={minutes}
          text={timerStatus ? "Focusing" : "Focus"}
          progress={progress}
          size={280}
          stroke={{ progressStroke: circleStrokeColor }}
        />

        <h4 className={s.subtitle}>
          Current task:{" "}
          <span className={s.task}>
            {hasCurrentTask && (
              <span className={s.taskType}>
                <img src={currentTask.type} alt="icon" />
              </span>
            )}
            <span className={s.taskName}>{currentTask.name || "🤷‍♂️"}</span>
          </span>
        </h4>

        <TimerRecentTasks />

        <Button className={s.timerStartButton} onClick={handleTimer}>
          {timerStatus ? "Cancel" : "Start"}
        </Button>
      </div>

      <TimerFinishModal
        show={timerFinishModal}
        onConfirm={handleTimerFinishModal}
        onHide={() => showTimerFinishModal(false)}
      />
    </div>
  );
};
