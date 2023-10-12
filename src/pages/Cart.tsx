// import React from "react";
import LinksHeader from "../components/home/nav/LinksHeader";
import Navbar from "../components/home/nav/Navbar";
import Categories from "../components/home/nav/Categories";
import Footer from "../components/home/Footer";
import CartItems from "../components/cart/CartItems";
import EmptyCart from "../components/cart/EmptyCart";
import { useAppSelector } from "../store/hooks/hooks";

const Cart = () => {
  const isCartEmpty = useAppSelector((state) => state.cartReducer.isEmpty);

  const checkCart = () => {
    console.log(isCartEmpty);
  };
  return (
    <div>
      <LinksHeader />
      <Navbar />
      <Categories />
      {isCartEmpty ? <EmptyCart /> : <CartItems handler={checkCart} />}
      <Footer />
    </div>
  );
};

export default Cart;
