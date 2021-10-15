/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import IdeaCard from "./components/IdeaCard";
import PageTitle from "./components/PageTitle";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [response, setResponse] = useState("");

  useEffect(() => {
    const checkBoards = async () => {
      const settings = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "API-KEY": "wwFjlZyQtA2u3gQdSt0sQg",
        },
      };

      try {
        const fetchResponse = await fetch(
          // "https://toadztoolz.hellonext.co/api/v3/organizations/info",
          "https://toadztoolz.hellonext.co/api/v3/feature_requests/latest",
          settings
        );

        const data = await fetchResponse.json();
        // console.log("data", data);

        setIdeas(data.feature_requests);
      } catch {
        console.error("Error fetching boards");
      }
    };

    checkBoards();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setTitleError(false);
    setDescriptionError(false);
    setEmailError(false);

    if (title === "") setTitleError(true);
    if (description === "") setDescriptionError(true);
    if (email === "") setEmailError(true);

    if (title && description && email) {
      try {
        // const body = { title, description, email, bucket_id: 5772 };
        // const response = fetch(
        //   "https://toadztoolz.hellonext.co/api/v3/feature_requests/latest",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "API-KEY": "wwFjlZyQtA2u3gQdSt0sQg",
        //     },

        //     body: JSON.stringify(body),
        //   }
        // );

        const body = {
          title: title,
          description: description,
          email: email,
          bucket_id: 5772,
        };
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "API-KEY": "wwFjlZyQtA2u3gQdSt0sQg",
          },
          body: JSON.stringify(body),
        };
        fetch(
          "https://toadztoolz.hellonext.co/api/v3/feature_requests/latest",
          requestOptions
        )
          .then((response) => response.json())
          .then((res) => setResponse(res));

        setTitle("");
        setDescription("");
        setEmail("");

        console.log("title:", title);
        console.log("desc:", description);
        console.log("email:", email);
        console.log("response", response);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (title && description && email) setIsDisabled(false);
  }, [title, description, email]);

  // function handleClick(e) {
  //   e.preventDefault();

  // console.log("title:", title);
  // console.log("desc:", description);
  // console.log("email:", email);

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title: "React Hooks POST Request Example" }),
  //   };

  //   fetch(
  //     "https://app.hellonext.co/api/v3/feature_requests/submit",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log("data", data));

  //   setTitle("");
  //   setDescription("");
  //   setEmail("");
  // }

  return (
    <div className="p-5 text-white bg h-full">
      <PageTitle title="Ideaz" />

      {/* <div className="mb-14">
        <h3 className="text-center">Submit a project or idea!</h3>

        <form onSubmit={handleSubmit} className="text-black ">
          <div className="flex items-center">
            <input
              className="mr-4 px-2 py-1 rounded-xl"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              className="mr-4 px-2 py-1 rounded-xl"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              className="mr-4 px-2 py-1 rounded-xl"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              className={`${
                isDisabled
                  ? "pointer-events-none	cursor-not-allowed opacity-50"
                  : ""
              }  w-1/5 px-2 py-2 bg-white rounded-full`}
            >
              Add
            </button>
          </div>
        </form>
      </div> */}

      <div className="flex flex-wrap gap-6 flex-row-">
        {ideas &&
          ideas.map((idea) => {
            return (
              <IdeaCard
                key={idea.id}
                title={idea.title}
                description={idea.description}
                url={idea.url}
                status={idea.status}
              />
            );
          })}
        <img src="west.png" alt="west" />
      </div>
    </div>
  );
};

export default Ideas;
