import React from "react";
import LinksHeader from "../components/home/nav/LinksHeader";
import Navbar from "../components/home/nav/Navbar";
import Categories from "../components/home/nav/Categories";

const Home = () => {
  return (
    <div>
      <LinksHeader />
      <Navbar />
      <Categories />
    </div>
  );
};

export default Home;
