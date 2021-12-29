/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import OpenSeaToad from "./OpenSeaToad";
import Ticker from "react-ticker";

const FloorToadz = () => {
  const [floorToadz, setFloorToadz] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkFloor = async () => {
      const settings = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      try {
        setIsLoading(true);

        const fetchResponse = await fetch(
          "https://toadzapi.herokuapp.com/listings/asc/50",
          settings
        );

        const data = await fetchResponse.json();
        console.log("data", data);
        setFloorToadz(data);
        setIsLoading(false);
      } catch {
        console.error("Error fetching floor toadz");
      }
    };

    checkFloor();
  }, []);

  return (
    <div className="mt-1 pb-10">
      {/* <h1 className="text-scratchy text-center m-auto">Floor Toadz</h1> */}
      {/* <h1 className="text-scratchy text-base my-3 text-center m-auto">
        The cheapest toadz (for now).
      </h1> */}

      {floorToadz.length > 49 ? (
        <Ticker offset="25%" speed={5} height={60}>
          {({ index }) =>
            index === 0 && floorToadz[index + 1] ? (
              <h2
                className="text-scratchy sm:text-lg"
                style={{ width: "25vw", padding: "10px" }}
              >
                Theses are the current floor toadz:
              </h2>
            ) : (
              <a
                className="flex flex-row items-center gap-4 text-scratchy"
                href={floorToadz[index + 1] ? floorToadz[index + 1].link : ""}
              >
                <img
                  className="w-1/12"
                  src={`${
                    floorToadz[index + 1] ? floorToadz[index + 1].image_url : ""
                  }`}
                  alt=""
                />
                {/* <p>
                  {floorToadz[index + 1]
                    ? floorToadz[index + 1].current_list_price
                    : ""}
                </p> */}
              </a>
            )
          }
        </Ticker>
      ) : (
        <></>
      )}

      {/* <div className="flex flex-wrap justify-around">
        {floorToadz.map((toad) => {
          return (
            <OpenSeaToad
              name={toad._id}
              pic={toad.image_url}
              traits={toad.traits}
              price={toad.current_list_price}
              buy={toad.link}
              key={toad._id}
            />
          );
        })}
      </div> */}
    </div>
  );
};
export default FloorToadz;
