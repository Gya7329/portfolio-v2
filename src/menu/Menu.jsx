import "./menu.scss";
import React from "react";

function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active") }>
      <ul onClick={()=>setMenuOpen(false)}>
      <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>   <li>
          <a href="#works">Work</a>
        </li>   <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
