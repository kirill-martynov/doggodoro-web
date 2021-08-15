import * as React from "react";

import { Button } from "../../../../core/components/Button";

import { Circle } from "../../../../core/components/Circle";
import { Icon } from "../../../../core/components/Icon";

import s from "./Timer.module.css";

export const Timer = () => {
  const handleDecreaseTime = () => {
    console.log("decrease time");
  };

  const handleIncreaseTime = () => {
    console.log("increase time");
  };

  const handleTimer = () => {
    console.log("handleTimer", handleTimer);
  };

  return (
    <div className={s.timer}>
      <Circle progress={80} size={250} />

      <div className={s.timerActions}>
        <Button theme="invisible" onClick={handleDecreaseTime}>
          <Icon name="minus" width="24" height="24" />
        </Button>
        <h4 className={s.time}>25:00</h4>
        <Button theme="invisible" onClick={handleIncreaseTime}>
          <Icon name="plus" width="24" height="24" />
        </Button>
      </div>

      <Button className={s.timerStartButton} onClick={handleTimer}>
        Start
      </Button>
    </div>
  );
};
