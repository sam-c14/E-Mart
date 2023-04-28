import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SliderImg1 from "../../assets/images/SliderImg1.jpg";
import SliderImg2 from "../../assets/images/SliderImg2.jpg";
import SliderImg3 from "../../assets/images/SliderImg3.jpg";

const Slider = () => {
  return (
    <div className="w-3/4 rounded-2xl">
      <Carousel
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        className="rounded-xl"
        width={"95%"}
        showThumbs={false}
      >
        <div>
          <img src={SliderImg1} alt="img-1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={SliderImg2} alt="img-2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={SliderImg3} alt="img-3" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
