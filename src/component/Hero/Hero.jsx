import React from "react";
import style from "./Hero.module.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carousel from "react-bootstrap/Carousel";
import { CarouselDetail } from "../../Banner";
const Hero = () => {
  return (
    <div className={style.carouselContainer}>
      <Carousel>
        {" "}
        {CarouselDetail.map((item, index) => {
          return (
           
            <Carousel.Item
              interval={3000}
              style={{
                height: "40vh",
                borderRadius: "2rem",
                marginTop: "2rem;",
              }}
            >
              <img
                className="d-block w-100"
                src={item?.image}
                alt="First slide"
                style={{borderRadius:"2rem"}}
              />
              <Carousel.Caption>
                <h1>{item?.title}</h1>
                <p>{item?.team}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Hero;
