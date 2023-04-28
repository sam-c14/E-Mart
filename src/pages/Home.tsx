import React from "react";
import LinksHeader from "../components/home/nav/LinksHeader";
import Navbar from "../components/home/nav/Navbar";
import Categories from "../components/home/nav/Categories";
import Slider from "../components/home/Slider";
import ProductGrid from "../components/home/ProductGrid";
import CurrentDeals from "../components/home/CurrentDeals";
import SponsoredProducts from "../components/home/SponsoredProducts";

const Home = () => {
  return (
    <div>
      <LinksHeader />
      <Navbar />
      <Categories />
      <div className="flex justify-between my-4 px-3">
        <Slider />
        <ProductGrid />
      </div>
      <div className="px-3">
        <CurrentDeals />
        <SponsoredProducts />
      </div>
    </div>
  );
};

export default Home;
