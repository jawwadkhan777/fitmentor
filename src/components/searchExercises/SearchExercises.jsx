import React, { useState } from "react";
import "./SearchExercises.css";
import { MdSearch } from "react-icons/md";

const SearchExercises = ({ exercisesData, setExercises, setSearchError }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandle = () => {
    if (searchTerm) {
      const exercisesSearched = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm)
      );

      if (exercisesSearched.length > 0) {
        setExercises(exercisesSearched);
        setSearchError("");
      } else {
        setExercises([]);
        setSearchError(
          "No results found. Please try a different search term i.e. 'back', 'push up', 'chest', 'shoulders', 'push up', 'cardio', ..."
        );
      }
    } else {
      // Reset exercises and error if search term is empty
      setExercises(exercisesData);
      setSearchError("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input"
        placeholder="search"
        // ref={inputRef}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value.toLowerCase());
        }}
      />
      <MdSearch
        size={35}
        style={{ color: "var(--orange)", cursor: "pointer" }}
        onClick={searchHandle}
      />
    </div>
  );
};

export default SearchExercises;
