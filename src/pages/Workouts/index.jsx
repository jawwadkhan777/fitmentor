import "./index.css";
import SearchExercises from "../../components/searchExercises/SearchExercises";
// import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../features/exercisesSlice";
import ReactPaginate from "react-paginate";

const Workouts = () => {
  const [exercises, setExercises] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to display per page

  const [searchError, setSearchError] = useState(""); // handle search error

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(currentPage + 1));
  }, [dispatch, currentPage]);

  const { exercisesData } = useSelector(({ app }) => {
    return app;
  });

  // Check if exerciseDetails is not empty
  if (!exercisesData || exercisesData.length === 0) {
    return (
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "10rem",
          textAlign: "center",
        }}
      >
        Loading..., Please wait!!!
      </div>
    );
  }
  // console.log(exercisesData);

  if (searchError) {
    return (
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "10rem",
          textAlign: "center",
        }}
      >
        {searchError && <div className="error-message">{searchError}</div>}
      </div>
    );
  }

  let pageCount;
  let displayData = [];
  if (exercises === null) {
    pageCount = Math.ceil(exercisesData.length / itemsPerPage);
    displayData = exercisesData.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );
  } else {
    pageCount = Math.ceil(exercises.length / itemsPerPage);
    displayData = exercises.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );
  }

  const pageClickhandler = ({ selected }) => setCurrentPage(selected);

  return (
    <div className="exercise">
      <SearchExercises
        exercisesData={exercisesData}
        setExercises={setExercises}
        setSearchError={setSearchError}
      />
      <div className="exercise-card">
        {displayData.map((data, index) => (
          <Link to={`/workouts/${data.id}`} className="link">
            {/* {renderExercises} */}
            <div className="exercise-card-menu" key={index}>
              <img src={data.gifUrl} alt="loading..." />
              <div>
                <li>Name: {data.name}</li>
                <li>Traget: {data.target}</li>
                <li>Equipment: {data.equipment}</li>
                <li>BodyPart: {data.bodyPart}</li>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={pageClickhandler}
        className="pagination"
      />
    </div>
  );
};

export default Workouts;
