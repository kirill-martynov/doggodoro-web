import * as React from "react";

import s from "./Circle.module.css";

interface IProps {
  progress: number;

  size?: number;
  fill?: {
    circleColor?: string;
    progressColor?: string;
  };

  stroke?: {
    circleStroke?: string;
    progressStroke?: string;
  };
  strokeWidth?: number;
}

export const Circle = (props: IProps) => {
  const {
    progress = 0,
    size = 32,
    strokeWidth = 16,
    fill = {},
    stroke = {},
  } = props;
  const { circleColor = "none", progressColor = "none" } = fill;
  const { circleStroke = "#f4f6f8", progressStroke = "#53d3af" } = stroke;

  const circleRef = React.useRef(null);

  const [offset, setOffset] = React.useState<number>(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  React.useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;

    setOffset(progressOffset);
  }, [setOffset, circumference, progress, offset]);

  return (
    <div className={s.circleWrapper}>
      <div className={s.time}>
        25:00<span>Focusing</span>
      </div>
      <svg
        className={s.progress}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className={s.circle}
          cx={center}
          cy={center}
          r={radius}
          fill={circleColor}
          stroke={circleStroke}
          strokeWidth={strokeWidth}
        />
        <circle
          ref={circleRef}
          className={s.circleProgress}
          cx={center}
          cy={center}
          r={radius}
          fill={progressColor}
          stroke={progressStroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
