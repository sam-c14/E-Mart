"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SliderImg1 from "../../assets/images/SliderImg1.jpg";
import SliderImg2 from "../../assets/images/SliderImg2.jpg";
import SliderImg3 from "../../assets/images/SliderImg3.jpg";
import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div className="xl:w-4/6 lg:w-3/4 lg:h-auto h-52 md:h-96 lg:mb-0 mb-2 w-full z-0 rounded-2xl">
      <Carousel slideInterval={5000}>
        <div className="w-full h-full">
          <img className="h-full w-full" src={SliderImg1} alt="img-1" />
        </div>
        <div className="w-full h-full">
          <img className="h-full w-full" src={SliderImg2} alt="img-2" />
        </div>
        <div className="w-full h-full">
          <img className="h-full w-full" src={SliderImg3} alt="img-3" />
        </div>
      </Carousel>
    </div>
  );
};
export default Slider;
