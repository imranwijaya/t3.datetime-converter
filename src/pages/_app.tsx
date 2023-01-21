import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeContextProvider } from "@components/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import "@styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <Analytics mode="production" />
    </ThemeContextProvider>
  );
};

export default MyApp;
