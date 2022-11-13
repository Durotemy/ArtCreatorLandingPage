import React from "react";
import { MainCard } from "../constants/index";
import style from "./ArtWorkCard.module.css";

const ArtWork = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
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
                  {!item.sold ? (
                    <button className={style.buttonSold}>Sold</button>
                  ) : (
                    <button className={style.buttonForSale}>For Sale</button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtWork;
