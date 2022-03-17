import React from "react";
import Download from "./components/Download";
import Header from "./components/Header";
import Nav from "./components/Nav";

const Filez = () => {
  return (
    <>
      <Nav color="nouns-warm" light />
      <div className="p-5 text-black bg-nouns-warm h-full">
        <Header title="FILEZ" />

        <div className="h-screen mt-20 px-5">
          <div className="mb-4 sm:w-7/12 m-auto">
            <h3 className="text-scratchy text-center">Download Toadz Assets</h3>
            <p className="xs:text-sm sm:text-base italic">
              Feel free to download and use all these assets in your own
              project. If you have any assets you would like to add to this page{" "}
              <a
                className="underline"
                href="https://twitter.com/cdt_eth"
                target="_blank"
                rel="noreferrer"
              >
                please reach out to me
              </a>{" "}
              {""}
              and let me know! Hope this helps!
            </p>
          </div>

          <div className="grid w-1/2 m-auto mt-10">
            <div>
              <p className="text-scratchy">Toad Files</p>
              <span className="relative z-0 inline-flex  rounded-md  mb-5">
                <Download
                  text="Toad Traits (png)"
                  file="/downloads/traits.zip"
                  left
                />
                <Download
                  text="All Toadz (png)"
                  file="/downloads/png-toad-no-bg.zip"
                />
                <Download
                  text="All Toadz (svg)"
                  file="/downloads/vectorToads-noBG.zip"
                  right
                />
              </span>
            </div>

            <div>
              <p className="text-scratchy">Font Families</p>
              <span className="relative z-0 inline-flex  rounded-md  mb-5">
                <Download
                  text="Wizards"
                  file="/downloads/BoxingWizards-Regular.otf"
                  left
                />
                <Download
                  text="Superscratchy"
                  file="/downloads/superscratchy.zip"
                  right
                />
              </span>
            </div>

            <div>
              <p className="text-scratchy">Extra</p>
              <span className="relative z-0 inline-flex  rounded-md  mb-5">
                <Download
                  text="Site Assets"
                  file="/downloads/site_assets.zip"
                  left
                />

                <Download
                  text="Toad Metadata"
                  file="/downloads/all-data.json"
                />
                <Download
                  text="Flyz Metadata"
                  file="/downloads/flyzOutputData.json"
                  right
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filez;
