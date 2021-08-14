import * as React from "react";

import { Circle } from "../../core/components/Circle";

import s from "./Home.module.css";

export function Home() {
  return (
    <div>
      Home
      <Circle progress={80} size={250} />
    </div>
  );
}
