import React from "react";
import LinksHeader from "../components/home/nav/LinksHeader";
import Navbar from "../components/home/nav/Navbar";
import Categories from "../components/home/nav/Categories";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div>
      <LinksHeader />
      <Navbar />
      <Categories />
      <Slider />
    </div>
  );
};

export default Home;
