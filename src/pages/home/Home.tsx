import React, { useEffect } from "react";
import LinksHeader from "../../components/home/nav/LinksHeader";
import Navbar from "../../components/home/nav/Navbar";
import Categories from "../../components/home/nav/Categories";
import Slider from "../../components/home/Slider";
import ProductGrid from "../../components/home/ProductGrid";
import CurrentDeals from "../../components/home/CurrentDeals";
import SponsoredProducts from "../../components/home/SponsoredProducts";
import Recommended from "../../components/home/Recommended";
import ShopNow from "../../components/home/ShopNow";
import AboutUs from "../../components/home/AboutUs";
import Footer from "../../components/home/Footer";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/hooks";
import { logout } from "../../store/asyncFns/postData";

const Home = () => {
  console.log(process.env);
  const dispatch = useAppDispatch();
  const { logoutStatus } = useParams();
  const handleLogout = async () => {
    console.log(logoutStatus);
    await dispatch(logout);
  };
  useEffect(() => {
    if (logoutStatus) {
      handleLogout();
    }
  }, [logoutStatus]);

  return (
    <div>
      <LinksHeader />
      <Navbar />
      {/* <Categories /> */}
      <div className="flex lg:flex-nowrap flex-wrap lg:justify-between md:mt-3 sm:mt-auto mt-20 my-4 lg:px-10 md:px-6 px-2">
        <Slider />
        <ProductGrid />
      </div>
      <div className="lg:px-10 md:px-6 px-2">
        <CurrentDeals />
        <SponsoredProducts />
        <Recommended />
        <ShopNow />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
