import React, { FC } from "react";
import LinksHeader from "../../components/home/nav/LinksHeader";
import Navbar from "../../components/home/nav/Navbar";
import Categories from "../../components/home/nav/Categories";
import Footer from "../../components/home/Footer";
import Faqs from "./faqs";
import ContactUs from "./contact-us";

interface helpComp {
  helpComp: string;
}

const Help: FC<helpComp> = (props): JSX.Element => {
  return (
    <div>
      <LinksHeader />
      <Navbar />
      <Categories />
      {props.helpComp === "faqs" ? <Faqs /> : <ContactUs />}
      <Footer />
    </div>
  );
};

export default Help;
