/* eslint-disable @next/next/no-img-element */
import Banner from "./components/Banner";
import Tip from "./components/Tip";
import Projects from "./components/Projects";
import ClaimCenter from "./components/ClaimCenter";
import Header from "./components/Header";
import dynamic from "next/dynamic";
import Vibe from "./components/Vibe";
import FloorToadz from "./components/FloorToadz";
import { useTheme } from "next-themes";
import IssaVibe from "./components/IssaVibe";

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
      <Projects />
      <ClaimCenter />
      {theme === "light" ? null : <Roadmap />}
      {theme === "light" ? null : <IssaVibe />}
      <FloorToadz />
      <Tip />
    </div>
  );
}
