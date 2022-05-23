import "./work.scss";

import React, { useState } from "react";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const data = [
    {
      id: 1,
      icon: ".assets/writing.png",
      title: "Classic Car",
      link:'https://newclassiccars.netlify.app/',
      desc: "The next Generation Website Using HTML and Css.",
      img: "./assets/classic.png",
    },
    {
      id: 2,
      icon: ".assets/writing.png",
      title: "Todo List",
      link:'https://todos-list1.netlify.app/',
      desc: "Todo Planner - User Can Write Daily Todo plan ",
      img: "./assets/todo.png",
    },
    {
      id: 3,
      icon: ".assets/writing.png",
      title: "Comfy-House",
      link:'https://comfyhouse-in.herokuapp.com/',
      desc: "Furniture E-Commerce Website Fully Working With paypal payment Api.   ",
      img: "./assets/comfy.png",
    },
    {
      id: 4,
      icon: ".assets/writing.png",
      title: "Landing Page",
      link:"https://foodcartindia.netlify.app/",
      desc: " First Static Webiste Simple and For Learning Purpose.",
      img: "./assets/landing.png",
    },
  ];
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link} target='_blank'>
                  <span className="projectlink">Projects</span></a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Works;
