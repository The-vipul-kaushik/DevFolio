import React from "react";
import "./Projects.css";
import image from "../../../public/assets/img/glasses.png";
import cricket from "../../../public/assets/img/cricket.jpg";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Projects</span>
        <span>Here are some of the projects i have worked on.</span>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "25rem",
            left: "-8rem",
            zIndex: "1",
            border: '2px solid'
          }}
        ></div>
      </div>
      <div className="cards">
        <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
            top: "-5rem",
            left: "25rem",
          }}
        ></div>
        <motion.div
          whileInView={{ left: "20rem" }}
          initial={{ left: "25rem" }}
          transition={{ type: "spring", duration: 1 }}
          style={{ top: "1rem", left: "20rem" }}
        >
          <Card
            pic={image}
            heading={"Cricket League App"}
            details={
              "Lorem fjksjjjjjjjj sdddddddd ffffffffj sssssssss fjlfkll jvksj skdjjfl lksjdflk jkdlkfs kljsdfl ksj fjkdls fk fdsjklf l sdjflks f kdsjf lskd dslkfj dslfkj dsklfjkdls s dfk sdlkfj l f sldfj dkls fd  skdjfhgskeenriljs sekrulesk  seiu sv sddifj"
            }
          />
        </motion.div>

        <motion.div
          whileInView={{ left: "1rem" }}
          initial={{ left: "-5rem" }}
          transition={{ type: "spring", duration: 1 }}
          style={{ top: "12rem", left: "1rem" }}
        >
          <Card
            pic={image}
            heading={"DevFolio"}
            details={
              "A responsive, interactive portfolio built with ReactJS to showcase my skills and projects. It features smooth scrolling navigation, reusable components, and a contact form. Technologies used are ReactJS, CSS, React Scroll, Vercel"
            }
            link={''}
          />
        </motion.div>

        <motion.div
          whileInView={{ left: "17rem" }}
          initial={{ left: "22rem" }}
          transition={{ type: "spring", duration: 1 }}
          style={{ top: "22rem", left: "17rem" }}
        >
          <Card
            pic={cricket}
            heading={"Cricket League App"}
            details={
              "A full-stack Cricket League management application built with Java Spring Boot for the backend and ReactJS for the frontend. The app allows users to manage teams, players, matches, and view league standings."
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
