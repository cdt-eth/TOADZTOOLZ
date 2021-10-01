/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useTheme } from "next-themes";

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
    width: "400px",
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

  useEffect(() => {
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

        const fetchResponse = await fetch(`/api/sockz/${id}`, settings);
        const data = await fetchResponse.json();

        setSockzData(data);
        setIsLoading(false);
      } catch {
        console.error("Error fetching sockz information");
      }
    };

    checkSockz();
  }, [id]);

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

  return (
    <>
      <div
        onClick={openModal}
        className="xs:w-1/2 md:w-1/3 hover:cursor-pointer"
      >
        <img
          className="cursor-pointer"
          src={theme === "light" ? "toadz_sockz.png" : "vibez.png"}
          alt="sockz"
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Sockz Tracker"
      >
        <h3
          className="enterID text-3xl"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          Sockz Finder
        </h3>

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

                  <div className="text-center">
                    {!sockzData?.sockzMinted ? (
                      <>
                        <p className="w-full text-2xl text-black">
                          Sockz available to claim ✅
                        </p>
                        <div className="pt-4">
                          <a
                            href="https://www.sockz.exchange/"
                            className="cursor-pointer w-full bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold hover:bg-blue-900 transition duration-100"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Claim now!
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="w-full xs:text-lg sm:text-2xl text-black">
                          Sockz have been claimed. ❌
                        </p>
                        <div className="pt-4">
                          <a
                            href={`https://opensea.io/assets/0x537b9af55dadcad9d22309e5b8ce35cffd8c1925/${id}`}
                            className="cursor-pointer w-full bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold hover:bg-blue-900 transition duration-100"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Buy on OpenSea 🌊
                          </a>
                        </div>
                      </>
                    )}
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
