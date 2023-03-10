import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => {
            return (
              <div
                key={footerLink.title}
                className="flex flex-col sm:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-lg leading-7 text-white mb-6">
                  {footerLink.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {footerLink.links.map((link, index) => {
                    return (
                      <li
                        key={link.name}
                        className={`font-poppins font-normal text-base leading-6 text-white/50 hover:text-cyan-400 cursor-pointer`}
                      >
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center flex items-center text-lg leading-7 text-white/60 ">
          Copyright <span className="mx-2">&#169;</span> 2021 HooBank. All
          Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 gap-6 relative">
          {socialMedia.map((social) => {
            return (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="w-[21px] h-[21px] object-contain cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
