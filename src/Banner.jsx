import React from "react";
import Hero from "./component/Hero/Hero";
import { CarouselDetails } from "./component/constants";
// export const CarouselDetails = [
//   {
//     tile: "titleonw",
//     id: "1",
//     header: `Discover, appreciate and
//       collect the best  `,
//     team: "The Illustra team",
//   },
//   {
//     id: "2",
//     header: `Get the best available deals here, appreciate`,
//     team: "The Illustra team",
//   },
//   {
//     id: "3",
//     header: " Discover, Recover and Take over",
//     team: "The Illustra team",
//   },
// ];

export const Banner = () => {
  return (
    <div>
      {CarouselDetails.map((item, index) => {
        return (
          <Hero title={item?.title} image={item?.image} writer={item?.writer} />
        );
      })}
    </div>
  );
};
