import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-modal-video/scss/modal-video.scss";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
