import React from "react";
import Hero from "./component/Hero/Hero";
import { wike,makinde, utorm } from "./images";
export const CarouselDetail = [
  {
    id: "1",
    title: `Discover, appreciate and collect the best`,
    team: "The Illustra team",
    image: wike
  },
  {
    id: "2",
    title: `Get the best available deals here, appreciate`,
    team: "The Illustra team",
   image: makinde
  },
  {
    id: "3",
    title: " Discover, Recover and Take over",
    team: "The Illustra team",
    image: utorm
  },
];

export const Banner = () => {
  return (
    <Hero />
  );
};
