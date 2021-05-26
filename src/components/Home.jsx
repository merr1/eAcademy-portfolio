import React from "react";
import Type from "typewriter-effect";
import girl from "../img/girll.gif";

const Home = () => {
  return (
    <div className="wrapper">
      <h1 className="static"> I'm a</h1>
      <div className="dynamic">
        <Type
          onInit={(type) => {
            type

              .typeString("Merr1")
              .pauseFor(500)
              .deleteAll()
              .typeString("Student")
              .pauseFor(500)
              .deleteAll()
              .typeString("front end developer")
              .start();
          }}
        />
      </div>

      <img alt="girl" src={girl} />
    </div>
  );
};
export default Home;
