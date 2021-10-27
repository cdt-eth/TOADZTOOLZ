/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import eyesData from "./api/traits/eyes.json";
import headData from "./api/traits/head.json";
import bodyData from "./api/traits/body.json";
import mouthData from "./api/traits/mouth.json";
import clothesData from "./api/traits/clothes.json";
import backgroundData from "./api/traits/background.json";
import accessoryOneData from "./api/traits/accessory-one.json";
import accessoryTwoData from "./api/traits/accessory-two.json";
import PageTitle from "./components/PageTitle";
import MiniNav from "./components/Toolz/MiniNav";
import MiniNavLink from "./components/Toolz/MiniNavLink";
import Dropdown from "./components/Buildz/Dropdown";
import Layer from "./components/Buildz/Layer";

const Buildz = () => {
  const trait_eyes = "QmUdxpAFCC1G2qTKDxumMH27ZUdKUNJVGXD1h9QECbBt4F";
  const trait_body = "Qma6F2hAiTpUDtZ9EpKxm7MPsKxRDE9qc8Wrivu34f2sMD";
  const trait_head = "QmRytjFygBYjGAwwASWS9aULm9YMz7CWvDdLCLW6z7o7ho";
  const trait_mouth = "QmUuEVetJkvJkwm9nqYpmMzbchZKKRZL93H9W66doD9CBX";
  const trait_clothes = "Qmbg1GrPdiGXwexmXAc3y1X2oH2Bn3E9tuzxGL29KAm9Rd";
  const trait_background = "QmUxNuP8ybKyHgjdVFJ47XniFuFDUb27HosNcgUesKTqj3";
  const trait_accessory_one = "QmPcbEPHuYmg35Wd2KUWLBcJCNa7DZzSRxCzfCmgjDnQba";
  const trait_accessory_two = "QmfUbpbNjD21KSgBGwtuXq7pTMJVM4zfLMb3yG5RhhMXkX";

  const eyesUrl = `https://gateway.pinata.cloud/ipfs/${trait_eyes}/`;
  const headUrl = `https://gateway.pinata.cloud/ipfs/${trait_head}/`;
  const bodyUrl = `https://gateway.pinata.cloud/ipfs/${trait_body}/`;
  const mouthUrl = `https://gateway.pinata.cloud/ipfs/${trait_mouth}/`;
  const clothesUrl = `https://gateway.pinata.cloud/ipfs/${trait_clothes}/`;
  const backgroundUrl = `https://gateway.pinata.cloud/ipfs/${trait_background}/`;
  const accessoryOneUrl = `https://gateway.pinata.cloud/ipfs/${trait_accessory_one}/`;
  const accessoryTwoUrl = `https://gateway.pinata.cloud/ipfs/${trait_accessory_two}/`;

  const [eyes, setEyes] = useState("");
  const [head, setHead] = useState("");
  const [body, setBody] = useState("");
  const [mouth, setMouth] = useState("");
  const [clothes, setClothes] = useState("");
  const [background, setBackground] = useState("");
  const [accessoryOne, setAccessoryOne] = useState("");
  const [accessoryTwo, setAccessoryTwo] = useState("");

  useEffect(() => {
    console.log(clothes);
  }, [clothes]);

  return (
    <div className="p-5 bg-gray-200 xs:h-screen ">
      <PageTitle title="Buildz" />

      <MiniNav>
        <MiniNavLink
          link="/"
          newPage={false}
          text="Home"
          pic="mininav/hoodie-1.png"
          alt="home"
        />
        <MiniNavLink
          link="https://twitter.com/cryptoadzNFT"
          newPage={true}
          text="Twitter"
          pic="mininav/hoodie-4.png"
          alt="twitter"
        />
        <MiniNavLink
          link="https://discord.gg/PDVfDSDbcE"
          newPage={true}
          text="Discord"
          pic="mininav/hoodie-2.png"
          alt="discord"
        />
        <MiniNavLink
          link="/toolz"
          newPage={false}
          text="Toolz"
          pic="mininav/hoodie-3.png"
          alt="toolz"
        />
        <MiniNavLink
          link="/ideaz"
          newPage={false}
          text="Ideaz"
          pic="mininav/hoodie-3.png"
          alt="ideaz"
        />
      </MiniNav>

      {/* mobile */}
      <div className="xs:h-40 text-black sm:h-64 relative xs:w-1/2 sm:w-1/5 m-auto my-8">
        <div className="border-2 border-toadz-dark w-full absolute h-full"></div>
        <Layer trait={background} traitUrl={backgroundUrl} />
        <Layer trait={body} traitUrl={bodyUrl} />
        <Layer trait={clothes} traitUrl={clothesUrl} />
        <Layer trait={head} traitUrl={headUrl} />
        <Layer trait={mouth} traitUrl={mouthUrl} />
        <Layer trait={eyes} traitUrl={eyesUrl} />
        <Layer trait={accessoryOne} traitUrl={accessoryOneUrl} />
        <Layer trait={accessoryTwo} traitUrl={accessoryTwoUrl} />
      </div>

      <div className="flex">
        <div className="flex mt-4 m-auto gap-4 mb-8 flex-wrap sm:justify-center">
          <Dropdown
            title="Background"
            traitData={backgroundData}
            setTrait={setBackground}
            trait={background}
          />
          <Dropdown
            title="Body"
            traitData={bodyData}
            setTrait={setBody}
            trait={body}
          />
          <Dropdown
            title="Eyes"
            traitData={eyesData}
            setTrait={setEyes}
            trait={eyes}
          />
          <Dropdown
            title="Mouth"
            traitData={mouthData}
            setTrait={setMouth}
            trait={mouth}
          />
          <Dropdown
            title="Head"
            traitData={headData}
            setTrait={setHead}
            trait={head}
          />
          <Dropdown
            title="Hoodie"
            traitData={clothesData}
            setTrait={setClothes}
            trait={clothes}
          />
          <Dropdown
            title="Accessory 1"
            traitData={accessoryOneData}
            setTrait={setAccessoryOne}
            trait={accessoryOne}
          />
          <Dropdown
            title="Accessory 2"
            traitData={accessoryTwoData}
            setTrait={setAccessoryTwo}
            trait={accessoryTwo}
          />
        </div>

        {/* Desktop */}
        <div className="xs:hidden sm:relative  w-1/4 m-auto">
          <div className="border-2 border-toadz-dark w-full absolute h-full"></div>
          <Layer trait={background} traitUrl={backgroundUrl} />
          <Layer trait={body} traitUrl={bodyUrl} />
          <Layer trait={clothes} traitUrl={clothesUrl} />
          <Layer trait={head} traitUrl={headUrl} />
          <Layer trait={mouth} traitUrl={mouthUrl} />
          <Layer trait={eyes} traitUrl={eyesUrl} />
          <Layer trait={accessoryOne} traitUrl={accessoryOneUrl} />
          <Layer trait={accessoryTwo} traitUrl={accessoryTwoUrl} />
        </div>
      </div>
    </div>
  );
};

export default Buildz;
