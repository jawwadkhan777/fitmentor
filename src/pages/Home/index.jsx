import React from "react";
import './index.css'
import HeroPage from "../../components/heroPage/HeroPage";
import Programs from "../../components/programs/Programs";
import Reasons from "../../components/reasons/Reasons";

const Home = () => {
  
  return (
    <div className="home">
      <HeroPage />
      <Programs />
      <Reasons />
    </div>
  );
};

export default Home;
