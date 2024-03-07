import "./index.css";
import SearchExercises from "../../components/searchExercises/SearchExercises";
// import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../features/exercisesSlice";
import ReactPaginate from "react-paginate";

const Workouts = () => {
  const [part, setPart] = useState("shoulders");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to display per page

  const dispatch = useDispatch();

  // const text = "shoulders";

  useEffect(() => {
    dispatch(fetchData(part, currentPage + 1));
  }, [dispatch, currentPage, part]);

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

  console.log(exercisesData);

  const pageCount = Math.ceil(exercisesData.length / itemsPerPage);

  const displayData = exercisesData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  //   let renderExercises = data.Response === "True" ? (data.exercisesData.map(({exercisesData}, index)=>(<div className="exercise-card-menu" key={index}>
  //   <img src={data.gifUrl} alt="loading..." />
  //   <div>
  //     <li>Name: {exercisesData.name}</li>
  //     <li>Traget: {exercisesData.target}</li>
  //     <li>Equipment: {exercisesData.equipment}</li>
  //     <li>BodyPart: {exercisesData.bodyPart}</li>
  //   </div>
  // </div>))) : (<div><h1>data.error</h1></div>)

  const pageClickhandler = ({ selected }) => setCurrentPage(selected);

  return (
    <div className="exercise">
      <SearchExercises setPart={setPart} part={part}/>
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
        // containerClassName={"pagination justify-content-center"}
        // pageClassName={"page-item"}
        // pageLinkClassName={"page-link"}
        // previousClassName={"page-item"}
        // previousLinkClassName={"page-link"}
        // nextClassName={"page-item"}
        // nextLinkClassName={"page-link"}
        // breakClassName={"page-item"}
        // breakLinkClassName={"page-link"}
        // activeClassName={"active"}
      />
    </div>
  );
};

export default Workouts;
