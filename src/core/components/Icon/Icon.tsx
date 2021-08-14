import * as React from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  name: string;

  className?: string;
  width?: string;
  height?: string;
}

export const Icon = ({ name, className, width = "16", height = "16" }: IProps) => {
  return (
    <ReactSVG
      className={className}
      beforeInjection={(svg) => {
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);
      }}
      src={`/assets/icons/${name}.svg`}
    />
  );
};
