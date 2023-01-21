import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@components/GlobalContext";
import useTimer from "@components/_hooks/use-timer";
import { formatInTimeZone } from "@utils/timezone";

const DatetimeFrom: NextPage = () => {
  const now = useTimer();
  const [time, setTime] = useState("");
  const { customFormat, locale, timezone } = useContext(GlobalContext);

  useEffect(() => {
    const formattedTime = formatInTimeZone(
      now,
      timezone
        ? timezone.value
        : Intl.DateTimeFormat().resolvedOptions().timeZone,
      customFormat ? customFormat : "EEEE, dd MMMM yyyy HH:mm:ss zzzz",
      { locale: locale ? locale : undefined }
    );

    setTime(formattedTime);
    return () => setTime("");
  }, [now, timezone, customFormat, locale]);

  return <>{time}</>;
};

export default DatetimeFrom;
