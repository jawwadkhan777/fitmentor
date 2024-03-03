import React from "react";
import "./index.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div>
          <h1 className="main-heading"><span className="stroke_text">About</span> FitMentor</h1>
          <h4 className="sub-heading">
            Welcome to FitMentor, your dedicated companion on the journey to a
            healthier and fitter you!{" "}
          </h4>
          <p className="paragraph">
            At FitMentor, we believe in the transformative power of fitness. Our
            mission is to empower you with the knowledge and guidance needed to
            achieve your physical well-being goals. Whether you're a fitness
            enthusiast or just starting your wellness journey, FitMentor is
            designed to be your ultimate resource.
            <div className="decoration"></div>
            Over 1000 exercises await to elevate your full-body fitness experience. We understand that every individual is unique, and so are their fitness needs. With FitMentor, you have the ability to search for exercises tailored to every single body part, ensuring a comprehensive and targeted approach to your fitness routine.
          </p>
        </div>
        <div>
          <h1 className="main-heading"><span className="stroke_text">What</span> Sets FitMentor Apart?</h1>
          <h4 className="sub-heading">Personalized Guidance:</h4>
          <p className="paragraph">
            FitMentor provides personalized exercise recommendations tailored to
            your fitness level, preferences, and goals. Your journey is unique,
            and so is your fitness plan.
          </p>

          <h4 className="sub-heading">Expert-Backed Workouts:</h4>
          <p className="paragraph">
            Our curated workouts are crafted by fitness experts, ensuring you
            get the most effective and safe exercises to enhance your strength,
            endurance, and overall fitness.
          </p>

          <h4 className="sub-heading">Immersive Graphics View:</h4>
          <p className="paragraph">
            Experience the power of immersive graphics view with every exercise
            in FitMentor. Our state-of-the-art visualizations not only guide you
            through each movement but also add a layer of engagement, making
            your fitness routine both effective and enjoyable.
          </p>
        </div>

        <div>
          <h1 className="main-heading"><span className="stroke_text">Your</span> Fitness, <span className="stroke_text">Your</span> Way</h1>
          <p className="paragraph">
            FitMentor is not just an app; it's your virtual fitness mentor,
            providing unwavering support and motivation. Whether you're aiming
            for weight loss, muscle gain, or simply adopting a healthier
            lifestyle, FitMentor is with you every step of the way.
          </p>
        </div>
      </section>
      <h1 className="main-heading gap">
        <span className="stroke_text">Thank you</span> for choosing FitMentor – Where Your Fitness Story Begins!
      </h1>
    </>
  );
};

export default About;
