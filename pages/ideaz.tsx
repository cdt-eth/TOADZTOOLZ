/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import IdeaCard from "./components/IdeaCard";
import IdeaCardGroup from "./components/IdeaCardGroup";
import PageTitle from "./components/PageTitle";
import MiniNav from "./components/Toolz/MiniNav";
import MiniNavLink from "./components/Toolz/MiniNavLink";

const Ideaz = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  useEffect(() => {
    const checkBoards = async () => {
      const settings = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "API-KEY": process.env.NEXT_PUBLIC_HELLONEXT_API_KEY,
        },
      };

      try {
        const fetchResponse = await fetch(
          "https://toadztoolz.hellonext.co/api/v3/feature_requests/latest",
          settings
        );

        const data = await fetchResponse.json();

        setIdeas(data.feature_requests);
      } catch {
        console.error("Error fetching boards");
      }
    };

    checkBoards();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTitleError(false);
    setDescriptionError(false);
    setEmailError(false);

    if (title === "") setTitleError(true);
    if (description === "") setDescriptionError(true);
    if (email === "") setEmailError(true);

    try {
      const response = await fetch(
        "https://toadztoolz.hellonext.co/api/v3/feature_requests/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "API-KEY": process.env.NEXT_PUBLIC_HELLONEXT_API_KEY,
          },
          body: JSON.stringify({
            title: title,
            description: description,
            email: email,
            bucket_id: 5772,
          }),
        }
      );
      const data = await response.json();

      setTitle("");
      setDescription("");
      setEmail("");
    } catch (error) {
      console.log("my error", error);
    }
  };

  useEffect(() => {
    if (title && description && email) setIsDisabled(false);
  }, [title, description, email]);

  return (
    <div className="p-5 text-white bg h-full">
      <PageTitle title="Ideaz" />

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
      </MiniNav>

      <div className="mb-4  mt-4 sm:px-20">
        <div className="text-center mb-4 sm:w-7/12 m-auto">
          <h3 className="text-scratchy">Submit a project or idea!</h3>
          <p className="xs:text-sm sm:text-base italic">
            Feel free to input any email (test@test.com). It doesn't have to be
            your personal one, but the platform requires it. Also please add a
            link to your submission so we have something to link to (i.e.
            Website, OpenSea, Twitter etc).
          </p>
        </div>

        <form onSubmit={handleSubmit} className="text-black sm:w-3/4 m-auto">
          <div className="flex items-center flex-wrap px-4 gap-2 ">
            <div className="w-full flex gap-4">
              <input
                required
                className="w-1/2 px-2 py-2 mb-2 rounded-xl bg-toadz-gray outline-none placeholder-gray-200 text-white"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                required
                className="w-1/2 px-2 py-2 mb-2 rounded-xl bg-toadz-gray outline-none placeholder-gray-200  text-white"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <input
              required
              className="w-full px-2 py-2 mb-2 rounded-xl bg-toadz-gray outline-none placeholder-gray-200  text-white"
              type="text"
              placeholder="Description & Project Link"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <button
              className={`${
                isDisabled
                  ? "pointer-events-none	cursor-not-allowed opacity-50"
                  : ""
              }  xs:w-1/2 sm:w-1/5 py-2 mb-2 bg-white rounded-full`}
            >
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="mb-6">
        {isSuccessfullySubmitted && (
          <div className="text-wizards text-center text-2xl">
            Form submitted successfully!
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-6 flex-row">
        <IdeaCardGroup ideas={ideas} name="In Review" />
        <IdeaCardGroup ideas={ideas} name="Planned" />
        <IdeaCardGroup ideas={ideas} name="Completed" />
        <IdeaCardGroup ideas={ideas} name="Closed" />

        <img src="west.png" alt="west" />
      </div>
    </div>
  );
};

export default Ideaz;
