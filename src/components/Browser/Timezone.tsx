import type { NextPage } from "next";
import { useEffect, useState } from "react";

const BrowserTimezone: NextPage = () => {
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    return () => setTimezone("");
  }, []);

  return <>{timezone}</>;
};

export default BrowserTimezone;
