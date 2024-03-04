import React, { useEffect } from "react";
import './index.css'
import HeroPage from "../../components/heroPage/HeroPage";
import Programs from "../../components/programs/Programs";
import Reasons from "../../components/reasons/Reasons";
import { useDispatch } from "react-redux";
import { fetchData } from "../../features/exercisesSlice";

const Home = () => {
  const dispatch = useDispatch();
  
  const text = "back";
  
  useEffect(() => {
    dispatch(fetchData(text));
  }, [dispatch]);
  return (
    <div className="home">
      <HeroPage />
      <Programs />
      <Reasons />
    </div>
  );
};

export default Home;
