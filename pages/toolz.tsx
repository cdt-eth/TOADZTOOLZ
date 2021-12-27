/* eslint-disable @next/next/no-img-element */
import React from "react";
import Item from "./components/Toolz/Tool";
import MiniNav from "./components/Toolz/MiniNav";
import Section from "./components/Toolz/Section";
import AnchorGroup from "./components/Toolz/AnchorGroup";
import PageTitle from "./components/PageTitle";
import MiniNavLink from "./components/Toolz/MiniNavLink";
import Header from "./components/Header";
import toolz from "./api/toolz.json";
import ToolzGroup from "./components/ToolzGroup";

const Toolz = () => {
  return (
    <div className="bg-toadz-dark h-full text-white p-5 sm:px-10">
      <Header title="TOOLZ" />
      <PageTitle passedClass="" title="Toolz" />

      <MiniNav passedClass="">
        <MiniNavLink
          link="/"
          newPage={false}
          text="Home"
          pic="mininav/ghosts-1.png"
          alt="home"
        />

        <MiniNavLink
          link="/buildz"
          newPage={false}
          text="Buildz"
          pic="mininav/ghosts-4.png"
          alt="buildz"
        />
        <MiniNavLink
          link="/filez"
          newPage={false}
          text="Filez"
          pic="mininav/ghosts-2.png"
          alt="filez"
        />
        <MiniNavLink
          link="/ideaz"
          newPage={false}
          text="Ideaz"
          pic="mininav/ghosts-3.png"
          alt="ideaz"
        />
      </MiniNav>

      <AnchorGroup />

      <div>
        {toolz &&
          toolz.map((section) => (
            <Section title={section.title} id={section.id} key={section.title}>
              <ToolzGroup section={section.children} />
            </Section>
          ))}
      </div>
    </div>
  );
};

export default Toolz;
