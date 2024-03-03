import React from "react";
import "./Header.css";
import logo from "../../assets/Logo1.png";
import { NavLink } from "react-router-dom";

const pages = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "WORKOUTS", to: "/workouts" },
  { label: "BLOGS", to: "/blogs" },
  // { label: "CONTACT", to: "/contact" },
];
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="loading..." />

        <ul className="header_left_menu">
          {pages.map((page, index) => (
            <li key={index}>
              <NavLink to={page.to} className="pages">
                {page.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="header_right">
        <button className="btn">
          <NavLink to="/contact" className="navLink">CONTACT US</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Header;
