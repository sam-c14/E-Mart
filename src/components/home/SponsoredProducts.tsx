import React from "react";
import Product1 from "../../assets/images/Product1.webp";

const SponsoredProducts = () => {
  const deals = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <div className="py-2 border-b-2 rounded-tr-md rounded-tl-md text-black bg-white">
        <div className="flex gap-5 pl-5 items-center">
          <h1 className="text-2xl font-bold">Sponsored Products</h1>
          {/* <p className="text-sm">See All Items</p> */}
        </div>
      </div>
      <div className="flex rounded-bl-md rounded-br-md whitespace-nowrap w-full overflow-auto px-2 bg-white gap-2 py-2">
        {deals.map((deal) => (
          <div className="shadow-sm hover:shadow-lg transition-5 w-1/2 bg-fuchsia-400 flex flex-wrap justify-center border bg-white">
            <div className="">
              <img className="w-full h-full" src={Product1} alt="deal1" />
            </div>
            <div className="w-3/4">
              <p className="text-lg font-smeibold"> Watering Can 10l</p>
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

export default SponsoredProducts;
