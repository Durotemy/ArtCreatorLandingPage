import React from "react";
import { MainCard } from "../constants/index";
import style from "./ArtWorkCard.module.css";
import { TfiHeart } from "react-icons/tfi";

const ArtWork = () => {
  return (
    <div>
      {MainCard.map((item) => {
        return (
          <div className={style.cardItem}>
            <div className={style.cardImage}>
              <img className={style.image} src={item.image} alt="img" />
            </div>
            <div className={style.cardContent}>
              <h3 className={style.title}>{item.title}</h3>
              <br />
              <p className={style.text}>{item.text}</p>
              <p className={style.creator}>Creator: {item.creator}</p>
              <div className={style.buttonContainer}>
                <div className={style.icon}>
                  <TfiHeart />
                </div>
                {!item.sold ? (
                  <button className={style.buttonSold}>For Sale</button>
                ) : (
                  <button className={style.buttonForSale}>Sold</button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtWork;
