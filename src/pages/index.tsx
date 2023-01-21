import type { NextPage } from "next";
import { useContext } from "react";
import { GlobalContextProvider } from "@components/GlobalContext";
import { ThemeContext } from "@components/ThemeContext";
import Layout from "@components/Layout";
import BrowserTime from "@components/Browser/Time";
import BrowserTimezone from "@components/Browser/Timezone";
import BrowserLanguage from "@components/Browser/Language";
import TimezoneFrom from "@components/Timezone/From";
import TimezoneTo from "@components/Timezone/To";
import DatetimeFrom from "@components/Datetime/From";
import DatetimeTo from "@components/Datetime/To";
import Locale from "@components/Locale";
import DatetimeFormat from "@components/Datetime/Format";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  const title = "Online Datetime Converter";
  const description = "Online Datetime Converter";
  const { isDarkMode } = useContext(ThemeContext);
  const statValueClassName = `whitespace-pre-wrap stat-value text-lg ${
    isDarkMode ? "text-accent" : ""
  }`;

  return (
    <Layout title={title} description={description}>
      <section className="flex flex-col gap-4 px-7 py-5">
        <div className="stats stats-vertical grid-cols-1 bg-transparent bg-opacity-5 md:grid-cols-3 md:stats-horizontal">
          <div className="stat py-1">
            <div className="stat-title">Browser Time</div>
            <div
              className={`stat-value whitespace-pre-wrap text-lg  ${
                isDarkMode ? "text-accent" : ""
              }`}
            >
              <BrowserTime />
            </div>
          </div>
          <div className="stat py-1">
            <div className="stat-title">Browser Timezone</div>
            <div className={statValueClassName}>
              <BrowserTimezone />
            </div>
          </div>
          <div className="stat py-1">
            <div className="stat-title">Browser Language</div>
            <div className={statValueClassName}>
              <BrowserLanguage />
            </div>
          </div>
        </div>
        <GlobalContextProvider>
          <div className="grid grid-cols-11 gap-2 md:gap-0">
            <div className="col-span-full px-4 md:col-span-5">
              <Locale />
            </div>
            <div className="col-span-full md:col-span-1"></div>
            <div className="col-span-full px-4 md:col-span-5">
              <DatetimeFormat />
            </div>
          </div>
          <div className="grid grid-cols-11">
            <div className="col-span-full md:col-span-5">
              <div
                className={`card card-compact w-full bg-base-100 ${
                  isDarkMode ? "bg-opacity-40" : "bg-opacity-10"
                } shadow`}
              >
                <div className="card-body">
                  <div>
                    <TimezoneFrom />
                  </div>
                  <div className="stat-value whitespace-pre-wrap text-lg">
                    <DatetimeFrom />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <div className="flex h-full w-full content-center items-center justify-center">
                <div className="hidden md:block">
                  <ChevronRightIcon className="h-7 w-7" />
                </div>
                <div className="block py-2 md:hidden">
                  <ChevronDownIcon className="h-7 w-7" />
                </div>
              </div>
            </div>
            <div className="col-span-full md:col-span-5">
              <div
                className={`card card-compact w-full bg-base-100 ${
                  isDarkMode ? "bg-opacity-40" : "bg-opacity-10"
                } shadow`}
              >
                <div className="card-body">
                  <div>
                    <TimezoneTo />
                  </div>
                  <div className="stat-value whitespace-pre-wrap text-lg">
                    <DatetimeTo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlobalContextProvider>
      </section>
    </Layout>
  );
};

export default Home;
