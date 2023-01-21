import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@components/GlobalContext";
import useTimer from "@components/_hooks/use-timer";
import { formatInTimeZone } from "@utils/timezone";

const DatetimeTo: NextPage = () => {
  const now = useTimer();
  const [time, setTime] = useState("");
  const { customFormat, locale, timezoneTo } = useContext(GlobalContext);

  useEffect(() => {
    const formattedTime = formatInTimeZone(
      now,
      timezoneTo
        ? timezoneTo.value
        : Intl.DateTimeFormat().resolvedOptions().timeZone,
      customFormat ? customFormat : "EEEE, dd MMMM yyyy HH:mm:ss zzzz",
      { locale: locale ? locale : undefined }
    );

    setTime(formattedTime);
    return () => setTime("");
  }, [now, timezoneTo, customFormat, locale]);

  return <>{time}</>;
};

export default DatetimeTo;
