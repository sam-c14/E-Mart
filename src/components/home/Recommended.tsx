import React from "react";
import RecommendedImg1 from "../../assets/images/RecommendedImg1.webp";
import { Link } from "react-router-dom";

const Recommended = () => {
  const deals = [1, 2, 3, 4, 5, 6];
  return (
    <div className="my-2">
      <div className="py-2 bg-white border-b-2 rounded-tr-md rounded-tl-md text-black">
        <div className="flex gap-5 pl-5 items-center">
          <h1 className="sm:text-xl text-base font-bold">
            Recommended for you
          </h1>
          <Link to={"/recommendations"}>
            <p className="sm:text-sm text-xs hover:underline transition-all text-pink-800 ">
              See All Items
            </p>
          </Link>
        </div>
      </div>
      <div className="grid rounded-bl-md rounded-br-md md:grid-cols-2 grid-cols-1 lg:grid-cols-3 px-2 bg-white gap-2 py-5">
        {deals.map((deal, index) => (
          <div
            className="shadow-sm hover:shadow-xl transition-5 border lg:py-0 py-5 bg-white items-center flex"
            key={index}
          >
            <div className="w-1/4">
              <img
                className="w-full h-full"
                src={RecommendedImg1}
                alt="deal1"
              />
            </div>
            <div className="w-3/4">
              <p>Apple ITunes $25 USD Gift Card</p>
              <div className="flex gap-3 items-center mt-2">
                <h5 className="font-bold text-lg">23,550</h5>
                {/* <p className="line-through text-sm text-gray-400">207000</p> */}
              </div>
              {/* <p className="text-green-600 text-sm">You save #143,900</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
