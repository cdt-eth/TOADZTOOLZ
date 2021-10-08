/* eslint-disable @next/next/no-img-element */
import Banner from "./components/Banner";
import Tip from "./components/Tip";
import Projects from "./components/Projects";
import Sockz from "./components/Sockz";
import Header from "./components/Header";
import dynamic from "next/dynamic";
import Vibe from "./components/Vibe";
import FloorToadz from "./components/FloorToadz";
import { useTheme } from "next-themes";

const Roadmap = dynamic(() => import("../Toadmap"), {
  ssr: false,
});

const Error = dynamic(() => import("./404"), {
  ssr: false,
});

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-toadz-dark">
      <Header />
      <Vibe />
      <Banner />
      {theme === "light" ? null : <Roadmap />}
      <Sockz />
      <FloorToadz />
      <Projects />
      <Tip />
    </div>
  );
}
