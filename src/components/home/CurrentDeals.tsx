import { Link } from "react-router-dom";
import { history } from "../../utilities/routerFns";
import { FC } from "react";
import { sliceStr } from "./SponsoredProducts";

export interface cProps {
  product: Array<any>;
}
export const routeToProduct = (deal: any, e: any) => {
  // console.log(e.target);
  if (!e.target.id) history.navigate(`/product/${deal.sku}`);
};

const CurrentDeals: FC<cProps> = ({ product }): JSX.Element => {
  // console.log(product);

  return (
    <div>
      <div className="bg-pink-800 py-2 rounded-tr-md rounded-tl-md text-white">
        <div className="flex gap-5 pl-5 items-center">
          <h1 className="sm:text-3xl text-lg font-bold">Today's Deals</h1>
          <Link to="/deals/daily">
            <p className="text-sm hover:underline">See All Items</p>
          </Link>
        </div>
      </div>
      <div className="grid rounded-bl-md rounded-br-md md:grid-cols-2 grid-cols-1 lg:grid-cols-3 px-2 bg-white gap-2 py-5 lg:py-2">
        {product.map((deal, index) => (
          <div
            key={index}
            onClick={(e) => routeToProduct(deal, e)}
            className="shadow-sm hover:shadow-lg transition-5 border lg:py-0 py-5 bg-white items-center gap-2 flex"
          >
            <div className="w-1/4">
              <img
                className="w-full h-full"
                src={deal.product_details.product_img}
                alt="deal1"
              />
            </div>
            <div className="w-3/4">
              <p>{sliceStr(deal.title)}</p>
              <div className="flex gap-3 items-center mt-2">
                <h5 className="font-bold text-lg">
                  {deal.pricing.discount !== 0 &&
                  typeof deal.pricing.discount === "number"
                    ? "₦" +
                      Math.round(
                        deal.pricing.price -
                          (deal.pricing.price * deal.pricing.discount) / 100
                      ).toLocaleString()
                    : "₦" + deal.pricing.price.toLocaleString()}
                </h5>
                <p className="line-through text-sm text-gray-400">
                  {deal.pricing.discount !== 0 &&
                  typeof deal.pricing.discount === "number"
                    ? "₦" + deal.pricing.price.toLocaleString()
                    : ""}
                </p>
              </div>
              <p className="text-green-600 text-sm">
                {deal.pricing.discount !== 0 &&
                typeof deal.pricing.discount === "number"
                  ? "You save ₦" +
                    (
                      deal.pricing.price -
                      Math.round(
                        deal.pricing.price -
                          (deal.pricing.price * deal.pricing.discount) / 100
                      )
                    ).toLocaleString()
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentDeals;
