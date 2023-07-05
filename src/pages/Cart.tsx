import React, { FC } from "react";
import LinksHeader from "../components/home/nav/LinksHeader";
import Navbar from "../components/home/nav/Navbar";
import Categories from "../components/home/nav/Categories";
import Footer from "../components/home/Footer";
import CartItems from "../components/cart/CartItems";
import EmptyCart from "../components/cart/EmptyCart";
interface cartProps {
  isCartEmpty: boolean;
}

const Cart: FC<cartProps> = (props): JSX.Element => {
  return (
    <div>
      <LinksHeader />
      <Navbar />
      <Categories />
      {props.isCartEmpty ? <EmptyCart /> : <CartItems />}
      <Footer />
    </div>
  );
};

export default Cart;
