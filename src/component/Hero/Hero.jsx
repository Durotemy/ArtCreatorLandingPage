import React from "react";
import style from "./Hero.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <div>
      <section>
        <div className={style.card}>
          <Carousel>
            <div>
              <h1>
                finest lorem lorem lore finest lorem lorem lore finest lorem
                lorem lore finest lorem lorem lore
              </h1>
              <p className={style.team}></p>
              <br />
            </div>
            <div>
              <h1>
                Discover, appreciate and <br /> collect the best art available,
              </h1>
              <p className={style.team}></p>

            </div>
            <div>
              <h1>
              finest lorem lorem lore finest lorem lorem lore finest lorem
                lorem lore finest lorem lorem lore
              </h1>
              <p className={style.team}></p>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="section2">
        <h2 className={style.section2Header}>Top Creator this week.</h2>
        <br />
        <hr className={style.horizontalLine} />
      </section>
    </div>
  );
};
export default Hero;
