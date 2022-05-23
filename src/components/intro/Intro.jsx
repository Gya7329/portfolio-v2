import "./intro.scss";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { Link } from "@material-ui/core";

function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Frontend Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <nav class="social">
          <ul>
            <li class="facebook">
              <a href="/">
                Facebook<i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li class="github">
              <a href="/">
                Github <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li class="linkedin">
              <a href="/">
                Linkedin<i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div className="imgContainer">
          <img src="assets/hero.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Gyasuddin Ansari</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="d-flex">
            <h4 className="intro-heading">
              I’m specializing in building (and occasionally designing)
              exceptional digital experiences. Currently, I’m focused on
              building accessible at
              <a href="www.kyloapps.com" className="company-name">
                Kylo Apps
              </a>
            </h4>
          </div>
          <div className="button-intro">
            <button className="hire-me">Hire me</button>
            <button className="resume">Resume</button>
          </div>
        </div>
        <a className="scroll-down" href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
