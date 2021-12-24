import React from "react";
import Download from "./components/Download";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import MiniNav from "./components/Toolz/MiniNav";
import MiniNavLink from "./components/Toolz/MiniNavLink";

const Filez = () => {
  return (
    <div className="p-5 text-black bg-nouns-warm h-full">
      <Header title="FILEZ" />
      <PageTitle passedClass="" title="Filez" />

      <MiniNav passedClass="">
        <MiniNavLink
          link="/"
          newPage={false}
          text="Home"
          pic="mininav/filez/1.png"
          alt="home"
        />
        <MiniNavLink
          link="https://twitter.com/cryptoadzNFT"
          newPage={true}
          text="Twitter"
          pic="mininav/filez/2.png"
          alt="twitter"
        />
        <MiniNavLink
          link="/toolz"
          newPage={false}
          text="Toolz"
          pic="mininav/filez/3.png"
          alt="toolz"
        />
        <MiniNavLink
          link="/ideaz"
          newPage={false}
          text="Ideaz"
          pic="mininav/filez/4.png"
          alt="ideaz"
        />
      </MiniNav>

      <div className="h-screen mt-20 px-5">
        <div className=" mb-4 sm:w-7/12 m-auto">
          <h3 className="text-scratchy text-center">Download Toadz Assets</h3>
          <p className="xs:text-sm sm:text-base italic">
            Feel free to download and use all these assets in your own project.
            If you have any assets you'd like to add to this page{" "}
            <a
              className="underline"
              href="https://twitter.com/cdt_eth"
              target="_blank"
              rel="noreferrer"
            >
              please reach to me
            </a>{" "}
            {""}
            and let me know! Hope this helps!
          </p>
        </div>
        <div className="flex justify-center">
          <Download text="Traits" file="/downloads/assets.zip" />
        </div>
      </div>
    </div>
  );
};

export default Filez;
