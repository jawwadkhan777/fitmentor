import React, { useState } from "react";
import "./SearchExercises.css";
import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { fetchData } from "../../features/exercisesSlice";

const SearchExercises = ({setPart}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const searchHandle = () => {
    dispatch(fetchData(searchTerm));
    setPart(searchTerm)
    // console.log(searchTerm);
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
          setSearchTerm(e.target.value);
        }}
      />
      <MdSearch
        size={35}
        style={{ color: "var(--orange)", cursor: "pointer" }}
        onClick={searchHandle}
      />
      {/* {error && <div className="error-message">Invalid body part. Please try again.</div>}
      {exercisesData.length === 0 && !error && (
        <div className="no-results-message">No results found for '{searchTerm}'</div>
      )} */}

      
    </div>
  );
};

export default SearchExercises;
