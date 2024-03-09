import React, { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataDetails } from "../../features/exercisesSlice";

const WorkoutDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { exerciseDetails } = useSelector(({ app }) => {
    return app;
  });
  
  useEffect(() => {
    dispatch(fetchDataDetails(id));
  }, [dispatch, id]);


  // Check if data is still loading
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // Check if exerciseDetails is not empty
  if (!Object.keys(exerciseDetails).length) {
    return <div style={{color: "white", fontSize:" 2rem", fontWeight: "bold", margin: "10rem", textAlign: "center"}}>Loading..., Please wait!!!</div>;
  }
  
  // console.log(exerciseDetails);
  
  return (
    <div className="container">
      <div className="left">
        <div className="name">{exerciseDetails.name}</div>
        <div className="details">
          <span><b>BODY PART --</b> {exerciseDetails.bodyPart}</span>
          <span><b>EQUIPMENT --</b> {exerciseDetails.equipment}</span>
          <span><b>TARGET --</b> {exerciseDetails.target}</span>
          <span className=".list"><b>SECONDARY MUSCLES:</b> {exerciseDetails.secondaryMuscles.map((secMuscles)=> (
            <li>{secMuscles}</li>
          ))}</span>
          <span className=".list"><b>INSTRUCTIONS:</b> {exerciseDetails.instructions.map(instructions=> (
            <li>{instructions}</li>
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
