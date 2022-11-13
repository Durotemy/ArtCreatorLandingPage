import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import {Carousels} from "../constants/index";
// import {Carousels} from "../constants/index"
Carousel = () => {
  return (
    <Carousel>
      <div>
        <h1>
          Discover, appreciate and <br /> collect the best art available,
        </h1>
      </div>
      <div>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Carousel;
