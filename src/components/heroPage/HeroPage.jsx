import React from "react";
import "./HeroPage.css";
import heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="hero_left">
        <div className="ad">
          <div></div>
          <span className="ad_text">
            Unleash the Power of FitMentor and Transform Your Fitness
          </span>
        </div>

        {/* hero text */}
        <div className="hero_text_h">
          <span className="stroke_text">Shape </span>
          <span>
            Your
            <br /> Ideal Body
          </span>
        </div>
        <div>
          <span className="hero_text_p">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </span>
        </div>

        {/* hero figures */}
        <div className="hero_figure">
          <div>
            <span>+777</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero_buttons">
          <button className="btn">Get Started</button>
          <button className="btn">
            <Link to="/about" className="link">Learn More</Link></button>
        </div>
      </div>

      {/* hero right side */}
      <div className="hero_right">
        {/* <button className="btn">Join Now</button> */}

        {/* heart_rate_section */}
        <div className="heart_rate_section">
          <img src={heart} alt="loading..." />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="loading..." className="hero_image" />
        <img
          src={hero_image_back}
          alt="loading..."
          className="hero_image_back"
        />

        {/* calories section */}
        <div className="calories_section">
          <img src={calories} alt="loading..." />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
