import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/exercisesSlice";
import SearchExercises from "../../components/searchExercises/SearchExercises";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Workouts = () => {
  // const [pageCount, setPageCount] = useState(0);
  // const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const { exercisesData } = useSelector(({ app }) => {
    return app;
  });

  const text = "back";

  useEffect(() => {
    dispatch(fetchData(text));
  }, [dispatch]);

  console.log(exercisesData);

  // useEffect(()=> {
  //   setItems(exercisesData)

  // }, [exercisesData])

  // // console.log(items);

  // const fetchPageData = (currentPage)=> {
  //   dispatch(fetchData(text, currentPage))
  // }

  // const pageClickhandler = ({ selected }) => {
  //   console.log(selected+1);
  //   const currentPage = selected+1;
  //   // const responseFromAPI = dispatch(fetchData(currentPage))
  //   const responseFromAPI = fetchPageData(currentPage)
  //   setItems(responseFromAPI)
  // };

  return (
    <div className="exercise">
      <SearchExercises />
      <div className="exercise-card">
        {exercisesData.map((data, index) => (
          <Link to={`/workouts/${data.id}`} className="link">
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
      {/* <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        // onPageChange={pageClickhandler}
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
      /> */}
    </div>
  );
};

export default Workouts;