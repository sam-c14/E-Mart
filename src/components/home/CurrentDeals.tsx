import React from "react";
import Deal1 from "../../assets/images/Deal1.webp";
import { Link } from "react-router-dom";

const CurrentDeals = () => {
  const deals = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="bg-pink-800 py-2 rounded-tr-md rounded-tl-md text-white">
        <div className="flex gap-5 pl-5 items-center">
          <h1 className="text-3xl font-bold">Today's Deals</h1>
          <Link to="/deals/daily">
            <p className="text-sm hover:underline">See All Items</p>
          </Link>
        </div>
      </div>
      <div className="grid rounded-bl-md rounded-br-md grid-cols-3 px-2 bg-white gap-2 py-2">
        {deals.map((deal) => (
          <div className="shadow-sm hover:shadow-lg transition-5 border bg-white items-center flex">
            <div className="w-1/4">
              <img className="w-full h-full" src={Deal1} alt="deal1" />
            </div>
            <div className="w-3/4">
              <p>iTec Handle Start, 3.5Kva Power...</p>
              <div className="flex gap-3 items-center mt-2">
                <h5 className="font-bold text-lg">143,000</h5>
                <p className="line-through text-sm text-gray-400">207000</p>
              </div>
              <p className="text-green-600 text-sm">You save #143,900</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentDeals;
