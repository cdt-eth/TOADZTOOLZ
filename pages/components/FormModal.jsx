/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import Modal from "react-modal";

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

function FormModal({ sockzData, sockzId, checkSockz }) {
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(sockzId);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    e.preventDefault();
    setId(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    checkSockz(id);
  }

  return (
    <>
      <div
        onClick={openModal}
        className="xs:w-1/2 md:w-3/4 hover:cursor-pointer"
      >
        <img className="cursor-pointer	" src="toadz_sockz.png" alt="sockz" />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Sockz Tracker"
      >
        <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Enter Cryptoadz id</h3>

        <p>Currently querying {id}</p>

        <form>
          <input onChange={handleChange} value={id} className="input" />
          <p>
            {!sockzData?.sockzMinted
              ? "Sockz available ✅"
              : "Sockz not available ❌"}
            <br />
            <a
              href={`https://opensea.io/assets/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6/${id}`}
              target="_blank"
              rel="noreferrer"
            >
              View on OpenSea
            </a>{" "}
            🌊
          </p>

          <div className="button" onClick={handleClick}>
            Search
          </div>
        </form>
      </Modal>
    </>
  );
}

export default FormModal;
