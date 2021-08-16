import * as React from "react";
import cn from "classnames";

import { Timer } from "./components/Timer";
import { TaskList } from "./components/TaskList";

import s from "./Home.module.css";

export function Home() {
  return (
    <div className={s.home}>
      <div className={s.columns}>
        <div className={cn(s.column, s.leftColumn)}>
          <Timer />
        </div>

        <div className={cn(s.column, s.rightColumn)}>
         <TaskList /> 
        </div>
      </div>
    </div>
  );
}
