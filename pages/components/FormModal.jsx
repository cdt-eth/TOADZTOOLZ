/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useTheme } from "next-themes";
import Claimed from "./Claimed";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    margin: "1rem",
    flexBasis: "45%",
    padding: "1.5rem",
    textAlign: "left",
    color: "inherit",
    textDecoration: "none",
    border: "1px solid #eaeaea",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",
    width: "700px",
  },
};

Modal.setAppElement("#__next");

function FormModal() {
  const { theme, setTheme } = useTheme();

  let subtitle;
  const [id, setId] = useState("");
  const [sockzData, setSockzData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [toadImg, setToadImg] = useState("");

  useEffect(() => {
    const options = { method: "GET" };

    fetch(
      `https://api.opensea.io/api/v1/asset/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6/${id}/`,
      options
    )
      .then((response) => response.json())
      .then((response) => setToadImg(response.image_preview_url))
      .catch((err) => console.error(err));

    const checkSockz = async () => {
      const settings = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      try {
        setIsLoading(true);

        const fetchResponse = await fetch(`/api/claimcenter/${id}`, settings);
        const data = await fetchResponse.json();

        setSockzData(data);
        setIsLoading(false);
      } catch {
        console.error("Error fetching sockz information");
      }
    };

    checkSockz();
  }, [id]);

  // console.log(toadImg);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
    setId("");
    setSearchInput("");
  }

  function handleClick(e) {
    e.preventDefault();

    setId(searchInput);
  }

  const flyzMinted = sockzData.flyzMinted;
  const choadzMinted = sockzData.choadzMinted;
  const sockzMinted = sockzData.sockzMinted;

  return (
    <>
      <div
        onClick={openModal}
        className="xs:w-1/2 md:w-1/3 hover:cursor-pointer"
      >
        {theme && (
          <img
            className="cursor-pointer"
            src={theme === "light" ? "claim.png" : "vibez.png"}
            alt="sockz"
          />
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Claim Center"
      >
        <div className="mb-4 text-center">
          <h3
            className="enterID text-3xl"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            Claim Center
          </h3>
          <p className="xs:text-sm sm:text-lg font-semibold text-black xs:w-3/4 m-auto">
            Below you’ll be able to claim your NFT or buy it on OpenSea if
            they’ve already been claimed.
          </p>
        </div>

        <form onSubmit={(e) => handleClick(e)}>
          <input
            autoFocus
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="input py-3"
            placeholder="Enter Cryptoadz id"
          />

          {id !== "" ? (
            <div className="pt-12 pb-6">
              {id && !isLoading ? (
                <div className="bg-gray-100 rounded-xl py-6">
                  <p className="text-center modal-text mb-4 max-w-max m-auto xs:text-2xl sm:text-3xl text-black">
                    Cryptoadz #{id}
                  </p>

                  <div className="sm:flex  px-6 gap-6">
                    <img
                      className="xs:mb-6 sm:mb-0 xs:w-1/2 sm:w-full xs:m-auto"
                      src={`${
                        toadImg === undefined ? "placeholder.png" : toadImg
                      }`}
                      alt={id}
                    />

                    <div className="text-center self-center">
                      <Claimed
                        data={flyzMinted}
                        asset="Flyz"
                        address="0xf8b0a49da21e6381f1cd3cf43445800abe852179"
                        id={id}
                        img="cc_flyz.png"
                        url="https://cryptoflyz.io/"
                      />

                      <Claimed
                        data={choadzMinted}
                        asset="Choadz"
                        address="0x172700a7dbbf92ee1db1474f956fd1078d2d0a00"
                        id={id}
                        img="cc.png"
                        url="https://choadz.com/"
                      />

                      <Claimed
                        data={sockzMinted}
                        asset="Sockz"
                        address="0x537b9af55dadcad9d22309e5b8ce35cffd8c1925"
                        id={id}
                        img="cc_sockz.png"
                        url="https://www.sockz.exchange/"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <h3 className="text-center modal-text dark:text-black">
                  Loading...
                </h3>
              )}
            </div>
          ) : (
            ""
          )}

          <div
            className="button text-2xl hover:opacity-75 transition duration-100"
            onClick={handleClick}
          >
            Search
          </div>
        </form>
      </Modal>
    </>
  );
}

export default FormModal;
