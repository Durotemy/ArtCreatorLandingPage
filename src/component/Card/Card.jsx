import React from "react";
import style from "./Card.module.css";
import { card } from "../constants/index";
const Card = () => {
  return (
    <div className={style.cardContainer}>
      {card.map((item, index) => {
        return (
          <div className={style.wrap}>
            <div className={style.card}>
              <img src={item.image} alt="icon" />
              <h2>{item.name}</h2>
              <p>{item.likes} likes</p>
              <p>{item.sold} sold</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
