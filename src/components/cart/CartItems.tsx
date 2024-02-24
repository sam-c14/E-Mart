import React, { FC, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
import PaystackLogo from "../../assets/images/paystack-logo.png";
import PaystackLogoAlt from "../../assets/images/paystack-logo-2.png";
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

  const calcSubTotal = () => {
    let sum = 0;
    cartItems.map((item: any) => {
      sum += (item.price as number) * Number(item.quantity);
    });
    return sum;
  };

  const dispatch = useAppDispatch();
  const subTotal = useMemo(() => calcSubTotal(), [cartItems]);

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
    <div className="sm:h-screen">
      <div className="h-4/5">
        <div className="bg-white px-16 md:px-10 h-1/5 py-5 shadow-sm sm:block hidden">
          <Link
            to="/"
            className="text-xs flex gap-x-2 items-center font-semibold"
          >
            <p>Home</p>
            <FaAngleRight />
            <p className="text-pink-800 font-bold">Shopping Cart</p>
          </Link>

          <h3 className="font-bold mt-2 lg:mt-5 lg:text-4xl md:text-xl">
            Shopping Cart
          </h3>
        </div>
        <div className="sm:hidden block pt-16 pb-0">
          <span className="font-bold text-lg px-2">Shopping Cart</span>
          <div className="bg-white my-5 flex justify-between px-2 py-3.5">
            <span className="font-semibold">Subtotal</span>
            <span className="font-bold"> ₦{subTotal.toLocaleString()}</span>
          </div>
        </div>
        <div className="xl:px-10 lg:px-7 md:px-2 px-2 sm:pt-5 pt-1">
          <div className="md:mb-4 lg:mb-2">
            <button
              onClick={goBack}
              className="border-2 border-pink-500 change-border text-pink-500 flex justify-between items-center font-semibold py-2 mb-2 w-44 px-2 rounded-md"
            >
              <FaArrowLeft className="text-xs" />
              <span className="lg:text-base text-sm">Continue Shopping</span>
            </button>
          </div>
          <div className="lg:flex gap-4 sm:mb-auto mb-16">
            <div className="lg:w-3/4 w-full">
              <div className="md:block hidden">
                <div className="bg-gray-200 py-3.5 px-2 rounded-sm">
                  <ul className="flex ">
                    <li className="lg:text-base md:text-sm font-semibold w-3/5">
                      Items Details
                    </li>
                    <li className="lg:text-base md:text-sm font-semibold w-1/6">
                      Quantity
                    </li>
                    <li className="lg:text-base md:text-sm font-semibold w-1/6">
                      Item Price
                    </li>
                    <li className="lg:text-base md:text-sm font-semibold w-1/6">
                      Action
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white py-2.5 sm:py-1 px-3">
                {cartItems.map((items) => (
                  <>
                    <div className="flex rounded-bl-sm px-1 sm:px-3 md:flex-nowrap flex-wrap rounded-br-sm">
                      <div className="md:w-3/5 w-full flex gap-2 items-center">
                        <div className="w-1/5" style={{ height: "91.667%" }}>
                          <img
                            src={items.src}
                            alt="product-img"
                            className="w-11/12"
                          />
                        </div>
                        <div>
                          <p className="font-semibold lg:text-base md:text-sm">
                            {items.title}
                          </p>
                          <p className="text-xs">
                            Sold by
                            <span className="ml-1 text-blue-500 font-semibold">
                              {items.title.substring(0, 10)}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="md:w-1/5 w-full md:my-auto my-3">
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
                      <div className="md:w-1/6 w-full mt-3">
                        <p className="font-bold text-lg">
                          ₦{items.price.toLocaleString()}
                        </p>
                        <p className="text-gray-400 text-sm">
                          ₦{items.price.toLocaleString()} x 1 item
                        </p>
                      </div>
                      <div className="md:w-1/6 w-full md:block flex justify-between gap-3 mt-3">
                        <div className="md:w-auto w-1/2 p-0">
                          <p
                            hidden={isLoading === items.sku}
                            onClick={() =>
                              removeItem(items.sku, {
                                sku: items.sku,
                                id: cartId,
                                price: items.price,
                              })
                            }
                            className="text-pink-800 text-sm transition-all hover:underline md:block hidden"
                          >
                            Remove item
                          </p>
                          {/* Button Display for smaller screens */}
                          <button
                            hidden={isLoading === items.sku}
                            onClick={() =>
                              removeItem(items.sku, {
                                sku: items.sku,
                                id: cartId,
                                price: items.price,
                              })
                            }
                            className="rounded-sm border border-gray-300 bg-transparent w-full md:hidden font-semibold text-sm py-1.5 hover:text-white hover:bg-gray-300 block"
                          >
                            Remove Item
                          </button>
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
                        <p className="text-pink-800 text-sm mt-1 transition-all hover:underline md:block hidden">
                          Save for Later
                        </p>
                        <div className="w-1/2">
                          <button className="rounded-sm border border-gray-300 bg-transparent w-full md:hidden py-1.5 hover:text-white hover:bg-gray-300 font-semibold text-sm block">
                            Save for Later
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="border border-gray-100 w-full" />
                  </>
                ))}
              </div>
            </div>
            {/* Payment Logo smaller screens start */}
            <div className="lg:hidden block md:mb-auto pt-2">
              <span className="text-gray-800 text-sm">We accept</span>
              <div className="flex justify-center">
                <img src={PaystackLogoAlt} alt="paystack logo" />
              </div>
            </div>
            {/* Payment Logo smaller screens end */}
            {/* Order Summary */}
            <div className="lg:w-1/4 z-20 w-full rounded-sm bg-white left-0 fixed-md bottom-0 lg:py-5 md:py-1">
              <div className="lg:block hidden">
                <div className="border-b py-4 flex xl:px-5 lg:px-3.5 justify-between">
                  <span className="font-bold">Order Summary</span>
                  <span className="font-bold">
                    {" "}
                    {cartItems.length} {cartItems.length > 1 ? "Items" : "Item"}
                  </span>
                </div>
                <div className="border-b py-5 flex xl:px-5 lg:px-3.5 justify-between">
                  <span className="w-3/5 xl:text-base lg:text-xs">
                    Delivery Charges:
                  </span>
                  <span className="text-xs text-gray-500 w-2/5">
                    Add your Delivery address at checkout to see delivery
                    charges
                  </span>
                </div>
                <div className="border-b py-3.5 flex xl:px-5 lg:px-3.5 justify-between">
                  <span className="xl:text-base lg:text-xs">Subtotal:</span>
                  <span className="font-bold">
                    ₦{subTotal.toLocaleString()}
                  </span>
                </div>
                <div className="border-b py-3.5 flex xl:px-5 lg:px-3.5 justify-between">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">
                    ₦{subTotal.toLocaleString()}
                  </span>
                </div>
                <div className="xl:px-5 lg:px-3.5 mt-1 mb-2 border-b py-3">
                  <Link
                    to="/checkout/complete-order"
                    className="w-full py-2 text-white block text-center bg-green-500 font-bold rounded-sm xl:text-base lg:text-sm"
                  >
                    Continue to Checkout
                  </Link>
                </div>
                <div className="gap-4">
                  <span className="text-gray-500 mx-5 text-xs">We accept:</span>
                  <div className="flex justify-center">
                    <img
                      className="w-54 h-16"
                      src={PaystackLogo}
                      alt="paystack logo"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:hidden block">
                <div className="px-5 my-1 py-3">
                  <Link
                    to="/checkout/complete-order"
                    className="w-full py-2 text-white block text-center bg-green-500 font-bold rounded-sm xl:text-base lg:text-sm"
                  >
                    Continue to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
