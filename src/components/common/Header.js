import React, { useState } from "react";

import line_header from "../../img/line_header.png";
import logo from "../../img/logo.png";
import logo_fb from "../../img/facebook.png";
import nav_menu from "../../img/nav-menu.png";

export default function Header() {
  // const [height, setHeight] = useState(0);
  const [navbar, setNavbar] = useState(false);

  const size = () =>{
    if(window.scrollY >=80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', size);

  return (
    <div>
      <header className="header_1" >
        <div className="container">
          <div className="empty">
            <img src={nav_menu} alt="a" />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="logo-fb">
            <img className="fb" src={logo_fb} alt=""></img>
          </div>
        </div>
      </header>

      <header className={navbar ? 'header_2 active': 'header_2'}>
        <div className="container">
          <div className="left">
            <a href="#about">About</a>
          </div>
          <ul className="mid">
            <li>
              <a href="#studio">Studio</a>
            </li>
            <li>
              <a href="#rental">Rental</a>
            </li>
            <li>
              <a href="#cafe">Cafe</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
          </ul>
          <div className="right">
            <a href="#contact">Contact</a>
          </div>
          <div className="line">
            <img src={line_header} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}
