import React from "react";
import style from "./Hero.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselSlide from "../Carousel/Carousel";
const Hero = ({ title, image, writer }) => {

  const splited =  title.split(/\r?\n/)
  console.log("ddd",splited[0])
  return (
    // <div>
    //   <section>
    //     <div className={style.card}>
    //       <CarouselSlide />
    //     </div>
    //   </section>
    //   <section className="section2">
    //     <h2 className={style.section2Header}>Top Creator this week.</h2>
    //     <br />
    //     <hr className={style.horizontalLine} />
    //   </section>
    // </div>
    <div>
      <h1></h1>
    </div>
  );
};
export default Hero;
