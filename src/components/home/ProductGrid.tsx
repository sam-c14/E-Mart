import React from "react";
import ProductImg2 from "../../assets/images/ProductImg2.webp";
import ProductImg3 from "../../assets/images/ProductImg3.webp";
import ProductImg4 from "../../assets/images/ProductImg4.webp";
import ProductImg1 from "../../assets/images/ProductImg2.webp";

const images = [ProductImg1, ProductImg2, ProductImg3, ProductImg4];

const ProductGrid = () => {
  return (
    <div className="lg:w-1/8 sm:h-auto h-screen w-full px-2">
      <div className="grid grid-cols-2 h-full gap-3">
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img src={image} className="h-full rounded-lg" alt="product" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
