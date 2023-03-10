import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row items-center p-6 rounded-[20px] gap-6 feature-card`}
    >
      <div
        className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-blue-900/20`}
      >
        <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-5">
        <h4 className="font-poppins font-semibold text-white text-lg leading-6 mb-2">
          {title}
        </h4>
        <p className="font-poppins font-normal text-white/50 text-base leading-6 mb-2">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-6 `}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => {
          return <FeatureCard key={feature.id} {...feature} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Business;
