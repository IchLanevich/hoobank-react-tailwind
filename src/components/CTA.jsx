import React from "react";
import styles from "../style";
import Button from "./Button";
import Tilt from "react-parallax-tilt";

const CTA = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.8}
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className="flex-1 flex flex-col">
          <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
        </div>
      </section>
    </Tilt>
  );
};

export default CTA;
