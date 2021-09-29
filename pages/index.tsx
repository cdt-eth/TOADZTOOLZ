/* eslint-disable @next/next/no-img-element */
import Banner from "./components/Banner";
import Tip from "./components/Tip";
import Projects from "./components/Projects";
import Sockz from "./components/Sockz";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="p-3">
      <Header />

      <Banner />

      <Sockz />

      <Projects />

      <Tip />
    </div>
  );
}
