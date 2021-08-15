import * as React from "react";
import cn from "classnames";

import { Timer } from "./components/Timer";

import s from "./Home.module.css";

export function Home() {
  return (
    <div className={s.home}>
      <div className={s.content}>
        <div className={cn(s.column, s.leftColumn)}>
          <Timer />
        </div>

        <div className={cn(s.column, s.rightColumn)}>
          <div className={s.tasks}>
            <h2>Tasks:</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
