import { Carousel } from "flowbite-react";
import React from "react";
import image1 from "../../asset/image1.jpg";
import image2 from "../../asset/image2.jpg";
import image3 from "../../asset/image3.jpg";
import image4 from "../../asset/image4.jpg";

const BannerCarousel = () => {
  return (
    <div className="w-full h-80 lg:h-2/3 px-6">
      <Carousel>
        <img src={image1} alt="..." />
        <img src={image2} alt="..." />
        <img src={image3} alt="..." />
        <img src={image4} alt="..." />
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
