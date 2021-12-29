import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-modal-video/scss/modal-video.scss";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    // {/* <ThemeProvider attribute="class"> */}
    <Component {...pageProps} />
    // {/* </ThemeProvider> */}
    // {/* </Layout> */}
  );
}
export default MyApp;
