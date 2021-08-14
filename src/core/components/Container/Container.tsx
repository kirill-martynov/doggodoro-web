import * as React from "react";
import cn from "classnames";

import s from "./Container.module.css";

interface IProps {
  className?: string;

  children: React.ReactNode;
}

export const Container = ({ className, children }: IProps) => {
  return <div className={cn(className, s.container)}>{children}</div>;
};
