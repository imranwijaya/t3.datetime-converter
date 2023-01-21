/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useMemo, useState, useCallback } from "react";
import useCustomEffect from "@components/_hooks/use-custom-effect";

export interface ThemeContextProps {
  isDarkMode: boolean;
  theme: string;
  setTheme: (theme: string) => void;
}

/** Theme Context */
export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  theme: "light",
  setTheme: () => {},
});

export const ThemeContextProvider = ({
  isDarkMode = false,
  value = "light",
  children,
}: {
  isDarkMode?: boolean;
  value?: string;
  children: React.ReactNode;
}) => {
  const [_isDarkMode, setIsDarkMode] = useState(isDarkMode);
  const [theme, setTheme] = useState(value);

  useCustomEffect(() => {
    const storeTheme = localStorage.getItem("theme");
    setTheme(storeTheme || "light");
    applyTheme(storeTheme || "light");
    setIsDarkMode(storeTheme === "dark");
  }, []);

  /** Apply theme to 'html' tag on DOM. */
  const applyTheme = (theme = "light") => {
    const newTheme = theme;
    const html = document.getElementsByTagName("html")[0];
    localStorage.setItem("theme", theme);
    html?.setAttribute("data-theme", newTheme);
  };

  /** Handle Theme change. */
  const handleThemeChange = useCallback((theme: string) => {
    setTheme(theme);
    applyTheme(theme);
    setIsDarkMode(theme === "dark");
  }, []);

  /** Current context value for theme. */
  const val = useMemo(
    () => ({
      isDarkMode: _isDarkMode,
      theme,
      setTheme: handleThemeChange,
    }),
    [_isDarkMode, theme, handleThemeChange]
  );

  return <ThemeContext.Provider value={val}>{children}</ThemeContext.Provider>;
};
