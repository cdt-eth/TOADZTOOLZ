/* eslint-disable @next/next/no-img-element */
import React from "react";
interface ClaimedProps {
  data: object;
  address: string;
  id: string;
  asset: string;
  url: string;
}
const Claimed = ({ data, asset, address, id, url }: ClaimedProps) => {
  return (
    <>
      {!data ? (
        <div className=" w-full flex mb-2 xs:pb-4">
          <p className="flex-1 xs:text-md sm:text-xl  text-black text-right">
            {asset} available ✅
          </p>

          <div className="flex-1 self-center">
            <a
              href={url}
              className="cursor-pointer w-full bg-toadz-green  text-white px-3 py-2 rounded-full text-sm font-bold hover:opacity-80 transition duration-100"
              target="_blank"
              rel="noreferrer"
            >
              Claim
            </a>
          </div>
        </div>
      ) : (
        <div className="w-full flex mb-2 xs:pb-4">
          <p className="flex-1 xs:text-md sm:text-xl text-black text-right">
            {asset} claimed ❌
          </p>

          <div className="flex-1 self-center">
            <a
              href={`https://opensea.io/assets/${address}/${id}`}
              className="cursor-pointer w-full bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold hover:bg-blue-900 transition duration-100"
              target="_blank"
              rel="noreferrer"
            >
              OpenSea
              {/* <img className="w-1/6" src="opensea.svg" alt="opensea" /> */}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Claimed;
