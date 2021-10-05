/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex justify-center">
      <div className="flex px-2">
        <Link passHref href="/">
          <a className="text-center text-scratchy transform hover:scale-110 transition duration-200">
            Home
            <img
              className="h-16 m-auto mt-1"
              src="markets/ghosts-4.png"
              alt="twitter"
            />
          </a>
        </Link>
      </div>

      <div className="flex px-2">
        <a
          href="https://twitter.com/cryptoadzNFT"
          target="_blank"
          rel="noreferrer"
          className="text-center text-scratchy transform hover:scale-110 transition duration-200"
        >
          Twitter
          <img
            className="h-16 m-auto mt-1"
            src="markets/ghosts-1.png"
            alt="twitter"
          />
        </a>
      </div>

      <div className="flex px-2 transform hover:scale-110 transition duration-200">
        <a
          href="https://discord.gg/PDVfDSDbcE"
          target="_blank"
          rel="noreferrer"
          className="text-center text-scratchy"
        >
          Discord
          <img
            className="h-16 m-auto mt-1"
            src="markets/ghosts-3.png"
            alt="discord"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
