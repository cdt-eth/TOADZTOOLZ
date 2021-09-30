/* eslint-disable @next/next/no-img-element */
import Banner from "./components/Banner";
import Tip from "./components/Tip";
import Projects from "./components/Projects";
import Sockz from "./components/Sockz";
import Header from "./components/Header";
import dynamic from "next/dynamic";

const Roadmap = dynamic(() => import("../Toadmap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />

      <Roadmap />

      <Sockz />
      <Projects />
      <Tip />
    </div>
  );
}
