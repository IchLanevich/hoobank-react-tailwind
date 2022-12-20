import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Tilt from "react-parallax-tilt";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="block md:hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} maw-w-[470px] mt-6`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <Tilt
          className="parallax-effect-img"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={800}
          transitionSpeed={1500}
          gyroscope={true}
        >
          <img src={card} alt="card" className="w-full h-full" />
        </Tilt>
      </div>
    </section>
  );
};

export default CardDeal;
