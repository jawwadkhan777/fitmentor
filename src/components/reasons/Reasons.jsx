import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png"

const Reasons = () => {
  return (
    <div className="reasons">
      <div className="left_portion">
        <img src={image1} alt="loading..." />
        <img src={image2} alt="loading..." />
        <img src={image3} alt="loading..." />
        <img src={image4} alt="loading..." />
      </div>

      <div className="right_portion">
        <span>Some Reasons</span>
        <div className="question">
          <span className="stroke_text">Why</span>
          <span> Choose Fitmentor?</span>
        </div>

        <div className="points">
          <div>
            <img src={tick} alt="loading..." />
            <span>Over 100+ exercises</span>
          </div>
          <div>
            <img src={tick} alt="loading..." />
            <span>Train smarter and faster then before</span>
          </div>
          <div>
            <img src={tick} alt="loading..."></img>
            <span>complete body transfromation exercises available</span>
          </div>
          <div>
            <img src={tick} alt="loading..." />
            <span>All programs and exercises are free for the Members</span>
          </div>
          <div>
            <img src={tick} alt="loading..." />
            <span>Reliable platform</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
