import React from "react";
import style from "./Card.module.css";
import { card } from "../constants/index";
import { HiOutlineCheck } from "react-icons/hi";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { TfiHeart } from "react-icons/tfi";
import { FcLike } from "react-icons/fc";

console.log("card", card.length);
const Card = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow:4,
    slidesToScroll: 2,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  }
  return (

      <Slider {...settings}>
       
      {card.map((item, index) => {
        return (
          <div className={style.wrap}  style={{ position:"relative" }}>
            <div className={style.card}>
              <p className={style.index}>{item.id}</p>
              <img src={item.image} alt="icon" />
              <p className={style.icon}>
                <HiOutlineCheck />
              </p>
              <h2>{item.name}</h2>
              <div className={style.soldLikes}>
                <p><FcLike className={style.heart}/>Likes: {item.likes}</p>
                <p>Ⓢ Sold: {item.sold} ETH</p>
              </div>
            </div>
          </div>
        );
      })}
    
      </Slider>
    // </div>
  );
};

export default Card;
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={"next__arrow"}
      style={{
        position: "absolute",
        top: "100px",
        right: "-20px",
        zIndex: "100",
      }}
      onClick={onClick}
    >
      {card.length>4 &&  <AiOutlineRight size="40" style={{ color: "white" }} />}
     
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={"prev__arrow"}
      style={{ position: "absolute", top: "100px", left: "0px", zIndex: "100" }}
      onClick={onClick}
    >
    {card.length>4 && <AiOutlineLeft size="40" style={{ color: "white" }} />}  
    </div>
  )
}
