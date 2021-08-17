import * as React from "react";

import { Button } from "../../../../core/components/Button";

import { Circle } from "../../../../core/components/Circle";

import s from "./Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimerCircleStrokeColorSelector,
  getTimerStatusSelector,
  getTimerWorkTimeSelector,
} from "../../state/timer/selectors/timerSelectors";
import {
  convertMillisToMinutes,
  convertMinutesToMillis,
  convertTimeToProgress,
} from "./timerUtils";
import { timerActions } from "../../state/timer/actions/timerActions";
import { getCurrentTaskSelector } from "../../state/tasks/selectors/tasksSelectors";
import { TimerRecentTasks } from "./components/TimerRecentTasks";

export const Timer = () => {
  const dispatch = useDispatch();

  const interval = React.useRef<any>(null);

  const [timer, setTimer] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);

  const timerStatus = useSelector(getTimerStatusSelector);
  const timerWorkTime = useSelector(getTimerWorkTimeSelector);
  const circleStrokeColor = useSelector(getTimerCircleStrokeColorSelector);
  const currentTask = useSelector(getCurrentTaskSelector);

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

        setTimer(time);
        setProgress(0);

        dispatch(timerActions.setTimerStatus());

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
      setTimer(time);
      setProgress(0);

      dispatch(timerActions.setTimerStatus());

      clearInterval(interval.current);

      interval.current = null;

      return;
    }

    dispatch(timerActions.setTimerStatus());

    interval.current = setInterval(updateTimer, 1000);
  };

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
          Current task: <span>{currentTask || "🤷‍♂️"}</span>
        </h4>

        <TimerRecentTasks />

        <Button className={s.timerStartButton} onClick={handleTimer}>
          {timerStatus ? "Cancel" : "Start"}
        </Button>
      </div>
    </div>
  );
};
