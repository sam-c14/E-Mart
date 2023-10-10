import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
// import Deal1 from "../../assets/images/Deal1.webp";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import {
  incProductQuantity,
  decProductQuantity,
  setItemToBeRemoved,
} from "../../store/slices/cartSlice";
import { removeFromCart as postRemovedItemFromCart } from "../../store/asyncFns/postData";
import { history } from "../../utilities/routerFns";
import { Spinner } from "flowbite-react";
// import { reduxFns } from "../../utilities/reduxFns";
import { itemT } from "../../store/slices/cartSlice";
import { changeProductQuantity } from "../../store/asyncFns/postData";
import { setItemQuantityToBeChanged } from "../../store/slices/cartSlice";
// import { Spinner } from "flowbite-react";
interface itemsCart {
  handler: Function;
}

const CartItems: FC<itemsCart> = (props): JSX.Element => {
  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);
  const cartId = useAppSelector((state) => state.cartReducer.id);
  const returnUrl = useAppSelector((state) => state.authReducer.returnUrl);
  // console.log(cartItems);
  const dispatch = useAppDispatch();
  const decItem = (id: any) => {
    dispatch(decProductQuantity(id));
  };
  const incItem = (id: any) => {
    // console.log(id);
    dispatch(incProductQuantity(id));
  };

  const [isLoading, setIsLoading] = useState<boolean | String | undefined>(
    false
  );

  const goBack = () => {
    if (returnUrl) history.navigate(returnUrl);
  };

  const removeItem = async (id: any, body: any) => {
    setIsLoading(id);
    await dispatch(setItemToBeRemoved(body));
    // await dispatch(removeFromCart(id));
    await dispatch(postRemovedItemFromCart);
    props.handler();
    setIsLoading(false);
  };

  const [changingItemQuantity, setChangingItemQuantity] = useState<
    boolean | String | undefined
  >(false);

  const changedItemQuantity = async (body: itemT) => {
    setChangingItemQuantity(body.sku);
    await dispatch(setItemQuantityToBeChanged(body));
    await dispatch(changeProductQuantity);
    setChangingItemQuantity(false);
  };

  return (
    <div className="h-screen">
      <div className="h-4/5">
        <div className="bg-white px-16 md:px-10 h-1/5 py-5 shadow-sm">
          <Link
            to="/"
            className="text-xs flex gap-x-2 items-center font-semibold"
          >
            <p>Home</p>
            <FaAngleRight />
            <p className="text-pink-800 font-bold">Shopping Cart</p>
          </Link>

          <h3 className="font-bold text-4xl mt-5">Shopping Cart</h3>
        </div>
        <div className="md:px-10 px-16 pt-5">
          <div className="mb-2">
            <button
              onClick={goBack}
              className="border-2 border-pink-500 change-border text-pink-500 flex justify-between items-center font-semibold py-2 w-44 px-2 rounded-sm"
            >
              <FaArrowLeft className="text-xs" />
              Continue Shopping
            </button>
          </div>
          <div>
            <div>
              <div className="bg-gray-200 py-3.5 px-2 rounded-sm">
                <ul className="flex ">
                  <li className="font-semibold w-3/5">Items Details</li>
                  <li className="font-semibold w-1/6">Quantity</li>
                  <li className="font-semibold w-1/6">Item Price</li>
                  <li className="font-semibold w-1/6">Action</li>
                </ul>
              </div>
            </div>
            <div className="bg-white py-1 px-3">
              {cartItems.map((items) => (
                <>
                  <div className="flex rounded-bl-sm px-3 rounded-br-sm">
                    <div className="w-3/5 flex gap-2 items-center">
                      <div className="w-1/5" style={{ height: "91.667%" }}>
                        <img
                          src={items.src}
                          alt="product-img"
                          className="w-11/12"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{items.title}</p>
                        <p className="text-xs">
                          Sold by
                          <span className="ml-1 text-blue-500 font-semibold">
                            {items.title.substring(0, 10)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="w-1/5">
                      <div className="shadow-md w-1/2 mt-4">
                        <button
                          disabled={!!changingItemQuantity}
                          onClick={() =>
                            changedItemQuantity({
                              id: cartId,
                              status: "active",
                              // prevents sending wrong price to the server
                              price:
                                items.quantity === 1
                                  ? items.price
                                  : (items.price as number) /
                                    (items.quantity as number),
                              quantity: 1,
                              op: "dec",
                              sku: items.sku,
                            })
                          }
                          className="border w-1/3 py-1 text-gray-400
                   bg-white text-sm font-semibold"
                        >
                          -
                        </button>
                        <button
                          disabled
                          className="border w-1/3 py-1 text-black
                   bg-white text-sm"
                        >
                          <span hidden={changingItemQuantity === items.sku}>
                            {items.quantity.toString()}
                          </span>
                          <span
                            className="w-11/12"
                            style={{ maxHeight: "91.6667%" }}
                          >
                            <Spinner
                              hidden={
                                !changingItemQuantity
                                  ? true
                                  : changingItemQuantity === items.sku
                                  ? false
                                  : true
                              }
                            />
                          </span>
                        </button>
                        <button
                          disabled={!!changingItemQuantity}
                          onClick={() =>
                            changedItemQuantity({
                              id: cartId,
                              status: "active",
                              // prevents sending wrong price to the server
                              price:
                                items.quantity === 1
                                  ? items.price
                                  : (items.price as number) /
                                    (items.quantity as number),
                              quantity: 1,
                              op: "inc",
                              sku: items.sku,
                            })
                          }
                          className="border w-1/3 py-1 text-gray-400
                   bg-white text-sm font-semibold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-1/6 mt-3">
                      <p className="font-bold text-lg">
                        ₦{items.price.toLocaleString()}
                      </p>
                      <p className="text-gray-400 text-sm">
                        ₦{items.price.toLocaleString()} x 1 item
                      </p>
                    </div>
                    <div className="w-1/6 mt-3">
                      <div>
                        <p
                          hidden={isLoading === items.sku}
                          onClick={() =>
                            removeItem(items.sku, {
                              sku: items.sku,
                              id: cartId,
                              price: items.price,
                            })
                          }
                          className="text-pink-800 text-sm transition-all hover:underline"
                        >
                          Remove item
                        </p>
                        <div className="flex pl-5 mb-1">
                          <Spinner
                            className="w-5 h-5"
                            hidden={
                              !isLoading
                                ? true
                                : isLoading === items.sku
                                ? false
                                : true
                            }
                          />
                        </div>
                      </div>
                      <p className="text-pink-800 text-sm mt-1 transition-all hover:underline">
                        Save for Later
                      </p>
                    </div>
                  </div>
                  <hr className="border border-gray-100 w-full" />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
