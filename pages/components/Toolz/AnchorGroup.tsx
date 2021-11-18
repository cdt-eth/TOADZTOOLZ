/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Anchor from "./Anchor";

const AnchorGroup = () => {
  return (
    <div className="flex flex-wrap justify-center mt-4 sm:px-20">
      <ScrollLink
        to="toad-holder"
        smooth={true}
        className="xs:px-2 sm:px-4 my-2"
      >
        <Anchor title="Toad-Holder" />
      </ScrollLink>

      <ScrollLink
        to="open-public"
        smooth={true}
        className="xs:px-2 sm:px-4 my-2"
      >
        <Anchor title="Open-to-public" />
      </ScrollLink>

      <ScrollLink to="stats" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="Stats" />
      </ScrollLink>

      <ScrollLink to="news" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="News" />
      </ScrollLink>

      <ScrollLink to="buy" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="Buy" />
      </ScrollLink>

      <ScrollLink to="resources" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="Resources" />
      </ScrollLink>

      <ScrollLink to="games" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="Games" />
      </ScrollLink>

      <ScrollLink to="art" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="Art" />
      </ScrollLink>

      <ScrollLink to="music" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="Music" />
      </ScrollLink>

      <ScrollLink to="merch" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="Merch" />
      </ScrollLink>

      <ScrollLink to="audio" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="Audio" />
      </ScrollLink>

      {/* <ScrollLink to="faq" smooth={true} className="xs:px-2 sm:px-4 my-2">
        <Anchor title="FAQ" />
      </ScrollLink> */}
    </div>
  );
};

export default AnchorGroup;
