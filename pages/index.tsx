/* eslint-disable @next/next/no-img-element */
import Credit from "./components/Credit";
import Projects from "./components/Projects";
import Header from "./components/Header";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import Nav from "./components/Nav";

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

        <Projects />

        <Credit />
      </div>
    </>
  );
}
