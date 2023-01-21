/* eslint-disable @typescript-eslint/no-empty-function */
import type { NextPage } from "next";
import { type Dispatch, type SetStateAction, useCallback } from "react";
import { createContext, useEffect, useMemo, useState } from "react";
import {
  type LocalesArrayObjectType,
  type LocalesKey,
  getLocaleFromArrayObject,
  LocalesArray,
} from "@utils/locale";
import enUS from "date-fns/locale/en-US";

type ContextProps = {
  timezone: { label: string; value: string };
  timezoneTo: { label: string; value: string };
  language: LocalesArrayObjectType;
  locale: Locale;
  customFormat: string;
  setTimezone: Dispatch<SetStateAction<{ label: string; value: string }>>;
  setTimezoneTo: Dispatch<SetStateAction<{ label: string; value: string }>>;
  setLanguage: Dispatch<SetStateAction<LocalesArrayObjectType>>;
  setLocale: Dispatch<SetStateAction<Locale>>;
  setCustomFormat: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<ContextProps>({
  timezone: { label: "", value: "" },
  timezoneTo: { label: "", value: "" },
  language: getLocaleFromArrayObject("en-US"),
  locale: enUS,
  customFormat: "",
  setTimezone: () => {},
  setTimezoneTo: () => {},
  setLanguage: () => {},
  setLocale: () => {},
  setCustomFormat: () => {},
});

type ProviderProps = {
  timezone?: { label: string; value: string };
  timezoneTo?: { label: string; value: string };
  language?: LocalesArrayObjectType;
  locale?: Locale;
  customFormat?: string;
  children: React.ReactNode;
};

export const GlobalContextProvider: NextPage<ProviderProps> = ({
  timezone = { label: "", value: "" },
  timezoneTo = { label: "", value: "" },
  language = getLocaleFromArrayObject("en-US"),
  locale = enUS,
  customFormat = "",
  children,
}) => {
  const [_timezone, setTimezone] = useState(timezone);
  const [_timezoneTo, setTimezoneTo] = useState(timezoneTo);
  const [_language, setLanguage] = useState(language);
  const [_locale, setLocale] = useState(locale);
  const [_customFormat, setCustomFormat] = useState(customFormat);

  function isValidLocale(value: unknown): value is LocalesKey {
    return typeof value === "string" && LocalesArray.includes(value);
  }

  /**
   * @see https://robertmarshall.dev/blog/dynamically-import-datefns-locale-mui-datepicker-localization/
   * @see https://codesandbox.io/s/mui-datepicker-date-fns-localization-p9qbs
   * @see https://stackoverflow.com/questions/66657997/failing-to-dynamically-import-date-fns-locale-libs-typescript-giving-an-atte
   * @see https://github.com/date-fns/date-fns/discussions/3284
   */
  const importLocaleFile = useCallback(async () => {
    // This webpack option stops all of the date-fns files being imported and chunked.
    const localeToSet = (await import(
      /* webpackChunkName: "date-fns-[index]", webpackMode: "lazy", webpackExclude: /_lib/ */ `date-fns/locale/${_language.code}/index.js`
    )) as Locale;
    setLocale(localeToSet);
  }, [_language?.code]);

  // If the user changes the locale from the select box,
  // listen to the change and import the locale that is now required.
  useEffect(() => {
    // If the locale has not yet been loaded.
    if (_locale.code !== _language?.code) {
      importLocaleFile().catch((error) => console.log(error));
    }
  }, [_locale.code, _language.code, importLocaleFile]);

  useEffect(() => {
    setTimezone({
      label: Intl.DateTimeFormat().resolvedOptions().timeZone,
      value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    setTimezoneTo({
      label: Intl.DateTimeFormat().resolvedOptions().timeZone,
      value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    if (navigator.languages !== undefined) {
      const lang = navigator.languages[0];

      if (isValidLocale(lang)) {
        const _locale = getLocaleFromArrayObject(lang);
        setLanguage(_locale);
      }
    } else {
      const lang = navigator.language;

      if (isValidLocale(lang)) {
        const _locale = getLocaleFromArrayObject(lang);
        setLanguage(_locale);
      }
    }
  }, []);

  const value = useMemo(
    () => ({
      timezone: _timezone,
      timezoneTo: _timezoneTo,
      language: _language,
      locale: _locale,
      customFormat: _customFormat,
      setTimezone,
      setTimezoneTo,
      setLanguage,
      setLocale,
      setCustomFormat,
    }),
    [_timezone, _timezoneTo, _language, _locale, _customFormat]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
