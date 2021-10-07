/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import OpenSeaToad from "./OpenSeaToad";

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
          "https://toadzapi.herokuapp.com/listings/asc/10",
          settings
        );

        const data = await fetchResponse.json();

        console.log("floor toadz:", data);
        // console.log("auction:", data);

        setFloorToadz(data);
        setIsLoading(false);
      } catch {
        console.error("Error fetching floor toadz");
      }
    };

    checkFloor();
  }, []);

  return (
    <div className="mx-5 text-3xl mt-5">
      <h1 className="text-scratchy text-center m-auto">Floor Toadz</h1>
      <h1 className="text-scratchy text-base my-3 text-center m-auto">
        The cheapest toadz (for now).
      </h1>
      <div className="flex flex-wrap justify-around">
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
      </div>
    </div>
  );
};
export default FloorToadz;
