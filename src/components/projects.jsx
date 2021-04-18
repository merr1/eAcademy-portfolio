import React from "react";
import todo from "../img/todo.png";
import pop from "../img/popUp.png";
import context from "../img/conextt.png";
import weather from "../img/weather.png";
const Projects = () => {
  return (
    <div className="projects">
      <div className="proj">
        <h1>weather</h1>
        <a
          href="https://merr1.github.io/weather/"
          rel="noreferrer"
          target="_blank"
        >
          <img className="imgP" src={weather} alt="weather" />
        </a>
      </div>

      <div className="proj">
        <h1>todo list</h1>
        <a
          href="https://github.com/merr1/eAcademy-react-todo"
          rel="noreferrer"
          target="_blank"
        >
          <img className="imgP" src={todo} alt="todo" />
        </a>
      </div>
      <div className="proj">
        <h1>Pop up</h1>
        <a
          href="https://github.com/merr1/eAcademy-popup-with-handling-outside-click"
          target="_blank"
          rel="noreferrer"
        >
          <img className="imgP" src={pop} alt="popup" />
        </a>
      </div>
      <div className="proj">
        <h1>context-menu</h1>
        <a
          href="https://github.com/merr1/eAcademy-context-menu"
          target="_blank"
          rel="noreferrer"
        >
          <img className="imgP" src={context} alt="context-menu" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
