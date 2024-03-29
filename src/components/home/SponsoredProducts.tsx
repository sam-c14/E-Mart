// import { FC } from "react";
import { useAppSelector } from "../../store/hooks/hooks";
import { routeToProduct } from "./CurrentDeals";

export const sliceStr = (str: string) => {
  const maxLength = 20;
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

const SponsoredProducts = (): JSX.Element => {
  const sponsoredProducts = useAppSelector(
    (state: any) => state.productReducer.sponsoredProducts
  );
  if (sponsoredProducts.length === 0) {
    return (
      <div>
        No Products to display
        {/* {JSON.stringify(sponsoredProducts)} */}
      </div>
    );
  }
  return (
    <div className="mb-5">
      <div className="py-3 mt-4 border-b-2 rounded-tr-md rounded-tl-md text-black bg-white">
        <div className="flex gap-5 pl-5 items-center">
          <h1 className="sm:text-2xl text-lg font-bold">Sponsored Products</h1>
          {/* <p className="text-sm">See All Items</p> */}
        </div>
      </div>
      <div className="grid grid-flow-col w-full rounded-bl-md rounded-br-md whitespace-nowrap overflow-auto px-4 bg-white gap-5 py-3.5">
        {sponsoredProducts?.length > 0
          ? sponsoredProducts.map((deal: any, index: any) => (
              <div
                onClick={(e) => routeToProduct(deal, e)}
                className="shadow-sm hover:shadow-xl transition-5 w-64 pb-9 flex flex-wrap justify-start border items-center px-2 bg-white"
                key={index}
              >
                <div className="">
                  <img
                    className="w-full h-full"
                    src={deal?.product_details.product_img}
                    alt="deal1"
                  />
                </div>
                <div className="w-3/4 pl-2">
                  <p className="text-lg font-semibold">
                    {" "}
                    {sliceStr(deal?.title)}
                  </p>
                  <div className="flex gap-3 items-center mt-2">
                    <h5 className="font-bold text-lg">
                      ₦
                      {deal?.pricing.discount > 0
                        ? (
                            deal?.pricing.price -
                            deal?.pricing.price * (deal?.pricing.discount / 100)
                          ).toLocaleString()
                        : deal?.pricing.price.toLocaleString()}
                    </h5>
                    <p
                      className={
                        deal?.pricing.discount > 0
                          ? "line-through text-sm text-gray-400"
                          : "hidden"
                      }
                    >
                      {deal?.pricing.price.toLocaleString()}
                    </p>
                  </div>
                  <p
                    className={
                      deal?.pricing.discount > 0
                        ? "text-green-600 text-sm"
                        : "hidden"
                    }
                  >
                    You save ₦
                    {deal?.pricing.price -
                      (deal?.pricing.price -
                        deal?.pricing.price * (deal?.pricing.discount / 100))}
                  </p>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default SponsoredProducts;
