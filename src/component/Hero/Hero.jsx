import React from "react";
// import style from "./Hero.module.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carousel from "react-bootstrap/Carousel";
import { CarouselDetail } from "../../Banner";
const Hero = () => {
  return (
    <Carousel>
      {" "}
      {CarouselDetail.map((item, index) => {
        return (
          <Carousel.Item interval={1000} style={{height:"30vh", width:"80%"}}>
            <img className="d-block w-100" src={item.image} alt="First slide" />
            <Carousel.Caption>
              <h1>{item.title}</h1>
              <p>{item.team}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default Hero;


