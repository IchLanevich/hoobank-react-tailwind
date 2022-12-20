import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Tilt from "react-parallax-tilt";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div className={` ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}>
      <div className="flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2">
        <span className="discount__icon">
          <img src={discount} alt="discount" className="w-8 h-8" />
        </span>
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% </span>DISCOUNT FOR
          <span className="text-white"> 1 MONTH </span>ACCOUNT
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-[52px] md:text-[72px]  text-white md:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
          <br />
        </h1>
        <div className="hidden md:flex md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h2 className="font-poppins font-semibold md:text-[72px] text-[52px] text-white md:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} my-10 md:my-0 relative`}>
      <Tilt
        className="parallax-effect-img"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={800}
        transitionSpeed={1500}
        gyroscope={true}
      >
        <img
          src={robot}
          alt="billing"
          className="inner-element w-[100%] h-full relative z-[5] p-4"
        />
      </Tilt>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 pink__gradient rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`md:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
