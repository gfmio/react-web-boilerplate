import { jsx } from "@emotion/core";
import { FC, useEffect, useRef, useState } from "react";

const Timer: FC = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = (setInterval(() => {
      setTime(time + 1);
    }, 1000) as any) as NodeJS.Timeout;
    return () => {
      clearInterval(intervalRef.current!);
    };
  });
  return <div>{time}</div>;
};

export default Timer;
