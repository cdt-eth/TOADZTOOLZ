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
  const [backgound, setBackground] = useState("");
  const [accessoryOne, setAccessoryOne] = useState("");
  const [accessoryTwo, setAccessoryTwo] = useState("");

  useEffect(() => {
    console.log(clothes);
  }, [clothes]);

  return (
    <div className="">
      <div>
        <div className="flex mt-4 m-auto gap-4 mb-8 flex-wrap justify-center">
          <div className="border-2 py-2 mx-2 border-toadz-dark flex flex-col w-1/5">
            <h1 className="text-center font-bold underline">Clothes</h1>
            <select
              className="m-auto w-1/2"
              name="clothes"
              value={clothes}
              onChange={(e) => {
                setClothes(e.currentTarget.value as any);
              }}
            >
              <option value="">Select option</option>

              {clothesData &&
                clothesData.map((clothes) => (
                  <option
                    key={uuidv4()}
                    label={clothes.fileId}
                    value={clothes.fileId}
                  >
                    {clothes.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="border-2 py-2 mx-2 border-toadz-dark flex flex-col w-1/5">
            <h1 className="text-center font-bold underline">Head</h1>
            <select
              className="m-auto w-1/2"
              name="head"
              value={head}
              onChange={(e) => {
                setHead(e.currentTarget.value as any);
              }}
            >
              <option value="">Select option</option>

              {headData &&
                headData.map((head) => (
                  <option
                    key={uuidv4()}
                    label={head.fileId}
                    value={head.fileId}
                  >
                    {head.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="border-2 py-2 mx-2 border-toadz-dark flex flex-col w-1/5">
            <h1 className="text-center font-bold underline">Body</h1>
            <select
              className="m-auto w-1/2"
              name="body"
              value={body}
              onChange={(e) => {
                setBody(e.currentTarget.value as any);
              }}
            >
              <option value="">Select option</option>

              {bodyData &&
                bodyData.map((body) => (
                  <option
                    key={uuidv4()}
                    label={body.fileId}
                    value={body.fileId}
                  >
                    {body.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="border-2 py-2 mx-2 border-toadz-dark flex flex-col w-1/5">
            <h1 className="text-center font-bold underline">Eyes</h1>
            <select
              className="m-auto w-1/2"
              name="eyes"
              value={eyes}
              onChange={(e) => {
                setEyes(e.currentTarget.value as any);
              }}
            >
              <option value="">Select option</option>

              {eyesData &&
                eyesData.map((eyes) => (
                  <option
                    key={uuidv4()}
                    label={eyes.fileId}
                    value={eyes.fileId}
                  >
                    {eyes.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="border-2 py-2 mx-2 border-toadz-dark flex flex-col w-1/5">
            <h1 className="text-center font-bold underline">Mouth</h1>
            <select
              className="m-auto w-1/2"
              name="mouth"
              value={mouth}
              onChange={(e) => {
                setMouth(e.currentTarget.value as any);
              }}
            >
              <option value="">Select option</option>

              {mouthData &&
                mouthData.map((mouth) => (
                  <option
                    key={uuidv4()}
                    label={mouth.fileId}
                    value={mouth.fileId}
                  >
                    {mouth.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="border-2 py-2 mx-2 border-toadz-dark flex flex-col w-1/5">
            <h1 className="text-center font-bold underline">Background</h1>
            <select
              className="m-auto w-1/2"
              name="backgound"
              value={backgound}
              onChange={(e) => {
                setBackground(e.currentTarget.value as any);
              }}
            >
              <option value="">Select option</option>

              {backgroundData &&
                backgroundData.map((backgound) => (
                  <option
                    key={uuidv4()}
                    label={backgound.fileId}
                    value={backgound.fileId}
                  >
                    {backgound.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="border-2 py-2 mx-2 border-toadz-dark flex flex-col w-1/5">
            <h1 className="text-center font-bold underline">Accessory 1</h1>
            <select
              className="m-auto w-1/2"
              name="accessoryOne"
              value={accessoryOne}
              onChange={(e) => {
                setAccessoryOne(e.currentTarget.value as any);
              }}
            >
              <option value="">Select option</option>

              {accessoryOneData &&
                accessoryOneData.map((accessoryOne) => (
                  <option
                    key={uuidv4()}
                    label={accessoryOne.fileId}
                    value={accessoryOne.fileId}
                  >
                    {accessoryOne.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="border-2 py-2 mx-2 border-toadz-dark flex flex-col w-1/5">
            <h1 className="text-center font-bold underline">Accessory 2</h1>
            <select
              className="m-auto w-1/2"
              name="accessoryTwo"
              value={accessoryTwo}
              onChange={(e) => {
                setAccessoryTwo(e.currentTarget.value as any);
              }}
            >
              <option value="">Select option</option>

              {accessoryTwoData &&
                accessoryTwoData.map((accessoryTwo) => (
                  <option
                    key={uuidv4()}
                    label={accessoryTwo.fileId}
                    value={accessoryTwo.fileId}
                  >
                    {accessoryTwo.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="relative w-1/3 m-auto">
          <div className="absolute">
            {backgound !== "" && (
              <img src={`${backgroundUrl}${backgound}.png`} alt={backgound} />
            )}
          </div>

          <div className="absolute">
            {body !== "" && <img src={`${bodyUrl}${body}.png`} alt={body} />}
          </div>

          <div className="absolute">
            {clothes !== "" && (
              <img src={`${clothesUrl}${clothes}.png`} alt={clothes} />
            )}
          </div>

          <div className="absolute">
            {head !== "" && <img src={`${headUrl}${head}.png`} alt={head} />}
          </div>

          <div className="absolute">
            {mouth !== "" && (
              <img src={`${mouthUrl}${mouth}.png`} alt={mouth} />
            )}
          </div>

          <div className="absolute">
            {eyes !== "" && <img src={`${eyesUrl}${eyes}.png`} alt={eyes} />}
          </div>

          <div className="absolute">
            {accessoryOne !== "" && (
              <img
                src={`${accessoryOneUrl}${accessoryOne}.png`}
                alt={accessoryOne}
              />
            )}
          </div>

          <div className="absolute">
            {accessoryTwo !== "" && (
              <img
                src={`${accessoryTwoUrl}${accessoryTwo}.png`}
                alt={accessoryTwo}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buildz;
