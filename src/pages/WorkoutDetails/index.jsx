import React from "react";
import "./index.css";
import { useSelector } from "react-redux";

const WorkoutDetails = () => {
  const { exerciseDetails } = useSelector(({ app }) => {
    return app;
  });

  console.log(exerciseDetails);

  return (
    <div className="container">
      <div className="left">
        <div className="name">{exerciseDetails.name}</div>
        <div className="details">
          <span><b>BODY PART --</b> {exerciseDetails.bodyPart}</span>
          <span><b>EQUIPMENT --</b> {exerciseDetails.equipment}</span>
          <span><b>TARGET --</b> {exerciseDetails.target}</span>
          <span className="list"><b>SECONDARY MUSCLES:</b> {exerciseDetails.secondaryMuscles.map((secMuscles)=> (
            <li>{secMuscles}</li>
          ))}</span>
          <span className="list"><b>INSTRUCTIONS:</b> {exerciseDetails.instructions.map((instruction)=> (
            <li>{instruction}</li>
          ))}</span>
        </div>
      </div>
      <div className="right">
        <img src={exerciseDetails.gifUrl} alt="loading..." />
      </div>
    </div>
  );
};

export default WorkoutDetails;
