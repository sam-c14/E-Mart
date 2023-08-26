import React from "react";
import ProductImg2 from "../../assets/images/ProductImg2.webp";
import ProductImg3 from "../../assets/images/ProductImg3.webp";
import ProductImg4 from "../../assets/images/ProductImg4.webp";
import ProductImg1 from "../../assets/images/ProductImg2.webp";

const images = [ProductImg1, ProductImg2, ProductImg3, ProductImg4];

const ProductGrid = () => {
  return (
    <div className="lg:w-1/8 sm:h-auto w-full px-2">
      <div className="sm:grid grid-cols-2 flex flex-wrap h-full gap-1 sm:gap-3">
        {images.map((image, index) => (
          <div key={index} className="sm:w-auto sm:h-full w-1/9 h-1/2">
            <img
              src={image}
              className="h-full w-full rounded-lg"
              alt="product"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
