import React from "react";
import "./Programs.css";
import { programsData } from "../../Data/ProgramsData";
import rightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="programs_header">
        <span className="stroke_text">explore our</span>
        <span>programs</span>
        <span className="stroke_text">to shape you</span>
      </div>

      <div className="programs_categories">``
        {programsData.map((program, index) => (
          <div key={index} className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="category_button">
              <button>Join Now</button>
              <img src={rightArrow} alt="loading..."/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
