import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="navbar">
      <div className="n-left">
        {/* <a href="">
          <div className="n-name">DevFolio</div>
        </a> */}
        <Link
              spy={true}
              to="navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <div className="n-name">DevFolio</div>
            </Link>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="skills" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to="projects" smooth={true}>
              <li>Projects</li>
            </Link>
            <Link spy={true} to="clients" smooth={true}>
              <li>Clients</li>
            </Link>
            <Link spy={true} to="contact" smooth={true}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <a href="../../../public/assets/docs/Resume_Vipul_Kaushik.pdf" download>
          <button className="button n-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
