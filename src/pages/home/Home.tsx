import React from "react";
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

const Home = () => {
  return (
    <div>
      <LinksHeader />
      <Navbar />
      {/* <Categories /> */}
      <div className="flex flex-wrap lg:justify-between my-4 lg:px-10 md:px-6 px-2">
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
