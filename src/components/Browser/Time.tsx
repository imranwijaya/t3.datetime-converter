import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useTimer from "@components/_hooks/use-timer";

const BrowserTime: NextPage = () => {
  const now = useTimer();
  const [time, setTime] = useState("");

  useEffect(
    () => setTime(now.toLocaleString(undefined, { hour12: false })),
    [now]
  );

  return <>{time}</>;
};

export default BrowserTime;
