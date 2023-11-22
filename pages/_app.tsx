import Navbar from "../components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import CursorFollower from "../components/CursorFollower";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CursorFollower />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
