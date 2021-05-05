import React from "react";
import Type from "typewriter-effect";

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
    </div>
  );
};
export default Home;
