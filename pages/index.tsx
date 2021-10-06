/* eslint-disable @next/next/no-img-element */
import Banner from "./components/Banner";
import Tip from "./components/Tip";
import Projects from "./components/Projects";
import Sockz from "./components/Sockz";
import Header from "./components/Header";
import dynamic from "next/dynamic";
import Vibe from "./components/Vibe";
// import FloorToadz from "./components/FloorToadz";

const Roadmap = dynamic(() => import("../Toadmap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-white dark:bg-toadz-dark">
      <Header />
      <Vibe />
      <Banner />
      {/* <FloorToadz /> */}
      <Roadmap />
      <Sockz />
      <Projects />
      <Tip />
    </div>
  );
}
