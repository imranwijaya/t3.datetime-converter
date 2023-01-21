import type { NextPage } from "next";
import { useContext } from "react";
import { ThemeContext } from "@components/ThemeContext";
import { env } from "@env/client.mjs";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const NEXT_PUBLIC_APP_NAME = env.NEXT_PUBLIC_APP_NAME;

const Navbar: NextPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeCheckedHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-all duration-100">
      <nav className="navbar w-full">
        <div className="navbar-start">
          <div className="min-h-12 no-animation inline-flex h-12 shrink-0 flex-wrap items-center justify-center px-4 text-xl font-semibold uppercase">
            {NEXT_PUBLIC_APP_NAME}
          </div>
        </div>
        <div className="navbar-end">
          <div className="menu menu-horizontal p-0">
            <div
              className="tooltip tooltip-left"
              data-tip={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <label
                htmlFor="theme-toggler"
                className="swap-rotate swap btn-ghost btn"
              >
                <input
                  id="theme-toggler"
                  type="checkbox"
                  onChange={themeCheckedHandler}
                  checked={theme === "dark"}
                  aria-label="theme-toggler"
                  aria-labelledby="theme-toggler"
                />
                <SunIcon className="swap-on h-5 w-5" />
                <MoonIcon className="swap-off h-5 w-5" />
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
