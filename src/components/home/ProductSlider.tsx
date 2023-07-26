import React from "react";
import { Carousel } from "flowbite-react";
import NailProduct1 from "../../assets/images/NailProduct1.webp";
import NailProduct2 from "../../assets/images/NailProduct2.webp";
import NailProduct3 from "../../assets/images/NailProduct3.webp";

const ProductSlider = () => {
  return (
    <div className="h-52 md:h-96 lg:mb-0 mb-2 w-full rounded-2xl">
      <Carousel slide={false}>
        <div className="h-full flex justify-center">
          <img className="h-full" src={NailProduct1} alt="img-1" />
        </div>
        <div className="h-full flex justify-center">
          <img className="h-full" src={NailProduct2} alt="img-2" />
        </div>
        <div className="h-full flex justify-center">
          <img className="h-full" src={NailProduct3} alt="img-3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
