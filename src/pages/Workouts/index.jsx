import "./index.css";
import SearchExercises from "../../components/searchExercises/SearchExercises";
// import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataDetails } from "../../features/exercisesSlice";

const Workouts = () => {
  // const [pageCount, setPageCount] = useState(0);
  // const [items, setItems] = useState([]);
  
  const { exercisesData } = useSelector(({ app }) => {
    return app;
  });
  console.log(exercisesData);
  //   let renderExercises = data.Response === "True" ? (data.exercisesData.map(({exercisesData}, index)=>(<div className="exercise-card-menu" key={index}>
  //   <img src={data.gifUrl} alt="loading..." />
  //   <div>
  //     <li>Name: {exercisesData.name}</li>
  //     <li>Traget: {exercisesData.target}</li>
  //     <li>Equipment: {exercisesData.equipment}</li>
  //     <li>BodyPart: {exercisesData.bodyPart}</li>
  //   </div>
  // </div>))) : (<div><h1>data.error</h1></div>)

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataDetails(id));
  }, [dispatch, id]);


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
