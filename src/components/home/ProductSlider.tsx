import { FC } from "react";
import { Carousel } from "flowbite-react";

export interface sProps {
  images: Array<any>;
}

const ProductSlider: FC<sProps> = ({ images }): JSX.Element => {
  return (
    <div className="h-52 md:h-96 lg:mb-0 mb-2 w-full rounded-2xl">
      <Carousel slide={false}>
        {images.map((image) => (
          <div className="h-full flex justify-center">
            <img className="h-full" src={image} alt={image.slice(0, 20)} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
