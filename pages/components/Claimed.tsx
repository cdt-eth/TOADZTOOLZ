/* eslint-disable @next/next/no-img-element */
import React from "react";
interface ClaimedProps {
  data: object;
  address: string;
  id: string;
  img: string;
  asset: string;
  url: string;
}
const Claimed = ({ data, img, asset, address, id, url }: ClaimedProps) => {
  return (
    <>
      {!data ? (
        <div className=" w-full flex mb-2 xs:pb-4 xs:gap-4 sm:gap-8">
          <div className="flex-1 flex justify-end xs:text-md sm:text-xl  text-black text-right">
            <img className="xs:w-1/2 sm:w-1/3 mr-2" src={img} alt={asset} />✅
          </div>

          <div className="flex-1 self-center text-left">
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
        <div className="w-full flex mb-2 xs:pb-4 xs:gap-4 sm:gap-8">
          <div className="flex-1 flex justify-end xs:text-md sm:text-xl  text-black text-right">
            <img className="xs:w-1/2 sm:w-1/3 mr-2" src={img} alt={asset} />❌
          </div>

          <div className="flex-1 self-center text-left">
            <a
              href={`https://opensea.io/assets/${address}/${id}`}
              className="cursor-pointer w-full bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold hover:bg-blue-900 transition duration-100"
              target="_blank"
              rel="noreferrer"
            >
              OpenSea
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Claimed;
