import * as React from "react";
import cn from "classnames";

import { Button } from "../../../../core/components/Button";

import { Circle } from "../../../../core/components/Circle";
import { Icon } from "../../../../core/components/Icon";
import { TASK_LIST } from "../TaskList/TaskList";

import s from "./Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimerCircleStrokeColorSelector,
  getTimerStatusSelector,
  getTimerWorkTimeSelector,
} from "../../state/timer/selectors/timerSelectors";
import { convertMillisToMinutes, convertMinutesToMillis, convertTimeToProgress } from "./timerUtils";
import { timerActions } from "../../state/timer/actions/timerActions";

export const Timer = () => {
  const dispatch = useDispatch();

  const interval = React.useRef<any>(null);

  const [time, setTime] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);
  const [currentTask, setCurrentTask] = React.useState<string>("");

  const timerStatus = useSelector(getTimerStatusSelector)
  const timerWorkTime = useSelector(getTimerWorkTimeSelector);
  const circleStrokeColor = useSelector(getTimerCircleStrokeColorSelector);

  const millis = convertMinutesToMillis(timerWorkTime);
  const minutes = convertMillisToMinutes(time);

  React.useEffect(() => {
    setTime(millis);
  }, []);

  const handleDecreaseTime = () => {
    console.log("decrease time");
  };

  const handleIncreaseTime = () => {
    console.log("increase time");
  };

  const handleTimer = () => {
    const hasStarted = interval.current;

    if (hasStarted) {
      setTime(millis);
      setProgress(0);

      dispatch(timerActions.setTimerStatus())

      clearInterval(interval.current);

      interval.current = null;

      return;
    }

    dispatch(timerActions.setTimerStatus())

    interval.current = setInterval(() => {
      setTime((prevState: number) => {
        if (prevState <= 0) {
          clearInterval(interval.current);

          interval.current = null;

          setTime(millis);
          setProgress(0);

          dispatch(timerActions.setTimerStatus())

          return prevState;
        }

        const currentTime = prevState - 1000;
        const currentProgress = convertTimeToProgress(currentTime, millis)

        setProgress(currentProgress);

        return currentTime;
      });
    }, 1000);
  };

  const handleCurrentTask = (task: string) => {
    const isCurrentTask = task === currentTask;

    if (isCurrentTask) {
      setCurrentTask("");

      return;
    }

    setCurrentTask(task);
  };

  return (
    <div className={s.timer}>
      <h2 className={s.title}>Timer:</h2>

      <div className={s.content}>
        <Circle
          time={minutes}
          progress={progress}
          size={280}
          stroke={{ progressStroke: circleStrokeColor }}
        />

        <h4 className={s.subtitle}>
          Current task: <span>{currentTask}</span>
        </h4>

        <ul className={s.tasks}>
          {TASK_LIST.slice(0, 3).map((task, index) => (
            <li
              key={`${task.name}+${index}`}
              className={cn(s.task, {
                [s.active]: currentTask === task.name,
              })}
              onClick={() => handleCurrentTask(task.name)}
            >
              <span className={s.taskType}>{task.type}</span>
              <span className={s.taskName}>{task.name}</span>
            </li>
          ))}
          <li className={s.more}>+{TASK_LIST.slice(3).length}</li>
        </ul>

        <Button className={s.timerStartButton} onClick={handleTimer}>
          {timerStatus ? 'Cancel' : 'Start'}
        </Button>
      </div>
    </div>
  );
};
