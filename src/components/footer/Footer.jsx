import React from "react";
import "./Footer.css";
import logo from '../../assets/Logo1.png'

const footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <div>
          <span className="stroke_text">Developed</span>
          <span> By</span></div>
        <span>Team: Smart_Dev</span>
        <span>
          Members:
          <ul>
            <li>Muhammad Jawwad Khan</li>
            <li>Muhammad Hasnain</li>
            <li>Abid Ali</li>
          </ul>
        </span>
      </div>
      <div className="footer_right">
        <img src={logo} alt="" />
        <span>&copy; copyright 2024</span>
      </div>
      <div className="blur footer-blur1"></div>
      <div className="blur footer-blur2"></div>
    </div>
  );
};

export default footer;
