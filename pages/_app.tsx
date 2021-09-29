import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-modal-video/scss/modal-video.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
