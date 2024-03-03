import React, { useState } from "react";
import "./SearchExercises.css";
import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { fetchData } from "../../features/exercisesSlice";

const SearchExercises = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const searchHandle = (e) => {
    dispatch(fetchData(searchTerm))
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
    </div>
  );
};

export default SearchExercises;
