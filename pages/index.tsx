/* eslint-disable @next/next/no-img-element */
import Banner from "./components/Banner";
import Credit from "./components/Credit";
import Projects from "./components/Projects";
import ClaimCenter from "./components/ClaimCenter";
import Header from "./components/Header";
import dynamic from "next/dynamic";
import Vibe from "./components/Vibe";
import FloorToadz from "./components/FloorToadz";
import { useTheme } from "next-themes";
import Nav from "./components/Nav";
// import ToadTicker from "./components/ToadTicker";

const Roadmap = dynamic(() => import("../Toadmap"), {
  ssr: false,
});

const Error = dynamic(() => import("./404"), {
  ssr: false,
});

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Nav />
      <div className="bg-toadz-lightgray w-full dark:bg-toadz-dark h-screen">
        <Header title="TOADZTOOLZ" />

        {/* <Nav /> */}
        {/* <Vibe /> */}
        {/* <Banner /> */}
        <Projects />
        {/* <div className="hidden sm:block">
          <FloorToadz />
        </div> */}
        {/* <ClaimCenter /> */}
        {/* {theme === "light" ? null : <Roadmap />} */}
        <Credit />
      </div>
    </>
  );
}
