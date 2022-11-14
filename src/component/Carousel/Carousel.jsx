import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import {Carousels} from "../constants/index";
import { CarouselDetails } from "../constants/index";
import style from "./Carousel.module.css";
const CarouselSlide = () => {
  return (
    <Carousel>
     
        {CarouselDetails.map((item) => (
          <div>
            <h1 className={style.header}>{item.header}</h1>
            <p className={style.team}></p>
          </div>
        ))}
    
    </Carousel>
  );
};

export default CarouselSlide;
