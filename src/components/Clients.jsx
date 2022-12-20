import React from "react";
import { clients } from "../constants";
import styles from "../style";
import Tilt from "react-parallax-tilt";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-48 min-w-[120px] relative bg-cover`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-48 w-[100px] object-contain"
          />
          <div className="absolute inset-0 opacity-100 transition ease-in-out duration-300 hover:mix-blend-overlay hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
