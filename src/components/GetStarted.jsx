import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer get-started`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-black w-full h-full rounded-full `}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-lg leading-[23px]">
          <span className="text-gradient mr-2">Get</span>
        </p>
        <span className="arrowup__icon">
          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px]" />
        </span>
      </div>
      <p className="font-poppins font-medium text-lg leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
