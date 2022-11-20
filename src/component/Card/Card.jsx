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
    slidesToShow:5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   
  }
  return (
      <Slider {...settings}>
      {card.map((item, index) => {
        return (
          <div className={style.wrap}  >
            <div className={style.card}>
              <p className={style.index}>{item.id}</p>
              <img src={item.image} alt="icon" />
              <p className={style.icon}>
                <HiOutlineCheck />
              </p>
              <h4 className={style.name}>{item.name}</h4>
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
      style={{ position: "absolute", top: "100px", left: "-15px", zIndex: "100" }}
      onClick={onClick}
    >
    {card.length>4 && <AiOutlineLeft size="40" style={{ color: "white" }} />}  
    </div>
  )
}
