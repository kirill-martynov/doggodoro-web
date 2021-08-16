import * as React from "react";
import { Link } from "react-router-dom";

import s from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={s.logo}>
      <Link to="/">doggodoro.</Link>
    </div>
  );
};
