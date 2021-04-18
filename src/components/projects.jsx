import React from "react";
import todo from "../img/todo.png";
import pop from "../img/popUp.png";
import context from "../img/conextt.png";
import weather from "../img/weather.png";
import Project from "./project";
const Projects = () => {
  const project = [
    {
      name: "weather",
      href: "https://merr1.github.io/weather/",
      src: weather,
    },
    {
      name: "todo list",
      href: "https://github.com/merr1/eAcademy-react-todo",
      src: todo,
    },
    {
      name: "Pop up",
      href:
        "https://github.com/merr1/eAcademy-popup-with-handling-outside-click",
      src: pop,
    },
    {
      name: "context-menu",
      href: "https://github.com/merr1/eAcademy-context-menu",
      src: context,
    },
  ];
  return (
    <div className="projects">
      {project.map((item, idx) => (
        <Project key={idx} name={item.name} href={item.href} src={item.src} />
      ))}
    </div>
  );
};

export default Projects;
