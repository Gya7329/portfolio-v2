import "./portfolio.scss";
import React, { useState,useEffect } from "react";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import {
  featurePortfolio,
  WebPortfolio,
  DesignPortfolio,
  MernPortfolio,
} from "../data";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "designing",
      title: "Designing",
    },
    {
      id: "mern",
      title: "MERN",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featurePortfolio);
        break;
      case "web":
        setData(WebPortfolio);
        break;
      case "designing":
        setData(DesignPortfolio);
        break;
      case "mern":
        setData(MernPortfolio);
        break;
      default:
        setData(featurePortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
          {data.map((d)=>(

              <div className="item">
<img src={d.img}/>
<h3>
    {d.title}
</h3>
</div>
          ))}
          
      </div>
    </div>
  );
}

export default Portfolio;
