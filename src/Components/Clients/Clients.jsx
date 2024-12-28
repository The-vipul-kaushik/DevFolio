import React from "react";
import "./Clients.css";
import Capgemini from "../../../public/assets/img/Capgemini.png";
import Jlp from "../../../public/assets/img/Jlp.png";
import Bosch from "../../../public/assets/img/Bosch.png";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <div className="clients" id="clients">
      <div className="awesome">
        <span>Clients</span>
        <span>I worked for</span>
        <span>Proud to have collaborated with leading brands, shaping impactful experiences.</span>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "15rem",
            left: "-8rem",
            zIndex: "1",
            border: '2px solid'
          }}
        ></div>
      </div>
      <div className="w-right">
        <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
            top: "4rem",
            left: "30rem",
          }}
        ></div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 4, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="">
            <img src={Capgemini} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jlp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Bosch} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Clients;
