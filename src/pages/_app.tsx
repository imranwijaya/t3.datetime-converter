import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeContextProvider } from "@components/ThemeContext";
import "@styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default MyApp;
