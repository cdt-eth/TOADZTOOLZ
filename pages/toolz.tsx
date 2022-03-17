/* eslint-disable @next/next/no-img-element */
import React from "react";
import Item from "./components/Toolz/Tool";
import MiniNav from "./components/Toolz/MiniNav";
import Section from "./components/Toolz/Section";
import AnchorGroup from "./components/Toolz/AnchorGroup";

import Header from "./components/Header";
import toolz from "./api/toolz.json";
import ToolzGroup from "./components/ToolzGroup";
import Nav from "./components/Nav";

const Toolz = () => {
  return (
    <>
      <Nav color="toadz-dark" />
      <div className="bg-toadz-dark h-full text-white p-5 sm:px-10">
        <Header title="TOOLZ" />

        <AnchorGroup />

        <div>
          {toolz &&
            toolz.map((section) => (
              <Section
                title={section.title}
                id={section.id}
                key={section.title}
              >
                <ToolzGroup section={section.children} />
              </Section>
            ))}
        </div>
      </div>
    </>
  );
};

export default Toolz;
