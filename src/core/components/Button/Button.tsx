import * as React from "react";
import cn from "classnames";

import s from "./Button.module.css";

interface IProps {
  theme?: 'primary' | 'secondary' | 'danger' | 'invisible';
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;

  children: React.ReactNode;

  onClick: () => void;
}

export const Button = ({
  theme = 'primary',
  type = "button",
  className,
  disabled,
  children,
  onClick,
}: IProps) => {
  const handleClick = () => {
    if (!onClick) {
      return;
    }

    onClick();
  };

  return (
    <button type={type} className={cn(s.button, s[theme], className)} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};
