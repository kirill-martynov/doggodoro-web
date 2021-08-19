import * as React from "react";
import cn from "classnames";

import s from "./Heading.module.css";

interface IProps {
  className?: string;
  size?: string;

  children: React.ReactNode;
}

export const Heading = ({ className, children }: IProps) => {
  return <h2 className={cn(s.heading, className)}>{children}</h2>;
};
