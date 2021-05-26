import React from "react";
import girl from "../img/girl.png";
const About = () => {
  return (
    <div className="container">
      <div className="photo">
        <img className="girl" src={girl} alt="girl" />
      </div>
      <div className="about">
        <span>Hi 🖖I'm merr1</span>
        <p>
          I'm always trying to learn something new <br />
          and upgrade my skills.
          <br />I do my work with creativity
          <br /> and primarily focus on results.
        </p>
      </div>
    </div>
  );
};

export default About;
