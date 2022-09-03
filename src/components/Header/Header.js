import React from "react";
import "./Header.scss";
import "bootstrap";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/searchIcon.svg";
import dot from "../../assets/images/dots.svg";


const Header = () => {
  return (
    <div className="Header_container">
      <div className="Main_container">
        <div className="Main_container__logo">
          <img src={logo} alt="logo" className="logo_image" />
        </div>
        <div className="Main_container__header">
        
          </div>
        <div className="Main_container__icon">
        <img src={search} alt="Search_image" className="Main_container__icon__searchImage" />
        <img src={dot} alt="dot_image" className="" />
          
         
          </div>
      </div>

      
    </div>
  );
};

export default Header;
