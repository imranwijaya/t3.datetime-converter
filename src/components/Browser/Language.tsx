import type { NextPage } from "next";
import type { LocalesKey } from "@utils/locale";
import { useEffect, useState } from "react";
import { getLocaleFromArrayObject } from "@utils/locale";

const BrowserLanguage: NextPage = () => {
  const [language, setLanguage] = useState("");
  const locale = getLocaleFromArrayObject(language as LocalesKey);

  useEffect(() => {
    if (navigator.languages[0] !== undefined) {
      setLanguage(navigator.languages[0]);
    } else {
      setLanguage(navigator.language);
    }

    return () => setLanguage("");
  }, []);

  return (
    <>
      {locale?.code.replace(/-+/g, "")} - {locale?.summary}
    </>
  );
};

export default BrowserLanguage;
