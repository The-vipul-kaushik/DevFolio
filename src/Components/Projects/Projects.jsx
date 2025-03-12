import React from "react";
import "./Projects.css";
import image from "../../../public/assets/img/glasses.png";
import cricket from "../../../public/assets/img/cricket.jpg";
import devfolio from "../../../public/assets/img/devfolio.jpg";
import Careerdash from "../../../public/assets/img/careerdash.jpg";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Projects</span>
        <span>Here are some of the projects i have worked on.</span>
      </div>
      <div className="cards">
        <div>
          <Card
            pic={Careerdash}
            heading={"CareerDash"}
            details={
              "CareerDash is a full-stack job tracker built with Spring Boot, React.js, and MySQL, helping users organize, track, and manage job applications efficiently with features like filtering, sorting, pagination, and JWT authentication. "
            }
          />
        </div>

        <div>
          <Card
            pic={devfolio}
            heading={"DevFolio"}
            details={
              "A responsive, interactive portfolio built with ReactJS to showcase my skills and projects. It features smooth scrolling navigation, reusable components, and a contact form. Technologies used are ReactJS, CSS, React Scroll, Vercel"
            }
          />
        </div>

        <div>
          <Card
            pic={cricket}
            heading={"Cricket League App"}
            details={
              "A full-stack Cricket League management application built with Java Spring Boot for the backend and ReactJS for the frontend. The app allows users to manage teams, players, matches, and view league standings."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;






{/* <div className="cards">
        <motion.div
          // whileInView={{ left: "-25rem" }}
          // initial={{ left: "25rem" }}
          // transition={{ type: "spring", duration: 3 }}
          // style={{ top: "17rem", left: "0rem" }}
        >
          <Card
            pic={Careerdash}
            heading={"CareerDash"}
            details={
              "CareerDash is a full-stack job tracker built with Spring Boot, React.js, and MySQL, helping users organize, track, and manage job applications efficiently with features like filtering, sorting, pagination, and JWT authentication. "
            }
          />
        </motion.div>

        <motion.div
          // whileInView={{ left: "-3rem" }}
          // initial={{ left: "-5rem" }}
          // transition={{ type: "spring", duration: 3 }}
          // style={{ top: "16rem", left: "1rem" }}
        >
          <Card
            pic={devfolio}
            heading={"DevFolio"}
            details={
              "A responsive, interactive portfolio built with ReactJS to showcase my skills and projects. It features smooth scrolling navigation, reusable components, and a contact form. Technologies used are ReactJS, CSS, React Scroll, Vercel"
            }
          />
        </motion.div>

        <motion.div
          // whileInView={{ left: "17rem" }}
          // initial={{ left: "22rem" }}
          // transition={{ type: "spring", duration: 3 }}
          // style={{ top: "22rem", left: "25rem" }}
        >
          <Card
            pic={cricket}
            heading={"Cricket League App"}
            details={
              "A full-stack Cricket League management application built with Java Spring Boot for the backend and ReactJS for the frontend. The app allows users to manage teams, players, matches, and view league standings."
            }
          />
        </motion.div>
      </div> */}