import type { NextPage } from "next";
import { env } from "@env/client.mjs";

const NEXT_PUBLIC_APP_NAME = env.NEXT_PUBLIC_APP_NAME;

const Footer: NextPage = () => {
  return (
    <footer className="footer footer-center p-2 text-base-content">
      <div>
        <p>
          {NEXT_PUBLIC_APP_NAME} @{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
