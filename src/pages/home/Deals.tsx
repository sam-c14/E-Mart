import React, { FC } from "react";
import LinksHeader from "../../components/home/nav/LinksHeader";
import Navbar from "../../components/home/nav/Navbar";
import Categories from "../../components/home/nav/Categories";
import Footer from "../../components/home/Footer";
import DailyDeals from "./DailyDeals";
import Recommendations from "./Recommendations";

interface deal {
  dealType: string;
}
const Deals: FC<deal> = ({ dealType }): JSX.Element => {
  return (
    <div>
      <LinksHeader />
      <Navbar />
      <Categories />
      {dealType === "daily-deals" ? <DailyDeals /> : <Recommendations />}
      <Footer />
    </div>
  );
};

export default Deals;
