import React from "react";
import todo from "../img/todo.png";
import pop from "../img/popUp.png";
import context from "../img/conextt.png";
import weather from "../img/weather.png";
import Project from "./project";
import quiz from "../img/quiz.png";
const Projects = () => {
  const project = [
    {
      name: "weather",
      demoHref: "https://merr1.github.io/weather/",
      sourceHref: "https://github.com/merr1/weather",
      src: weather,
    },
    {
      name: "todo list",
      demoHref: "https://e-academy-react-todoo.vercel.app/",
      sourceHref: "https://github.com/merr1/eAcademy-react-todo",
      src: todo,
    },
    {
      name: "quiz app",
      demoHref:
        "https://e-academy-quiz-app-final-project-rd98qo5ir-merr1.vercel.app/",
      sourceHref: "https://github.com/merr1/eAcademy-quiz-app-final-project",
      src: quiz,
    },
    {
      name: "Pop up",
      demoHref:
        "https://e-academy-popup-with-handling-outside-click.vercel.app/",
      sourceHref:
        "https://github.com/merr1/eAcademy-popup-with-handling-outside-click",
      src: pop,
    },
    {
      name: "context-menu",
      demoHref: "https://github.com/merr1/eAcademy-context-menu",
      sourceHref: "https://github.com/merr1/eAcademy-context-menu",
      src: context,
    },
  ];
  return (
    <div className="projects">
      {project.map((item, idx) => (
        <Project
          key={idx}
          name={item.name}
          demoHref={item.demoHref}
          sourceHref={item.sourceHref}
          src={item.src}
        />
      ))}
    </div>
  );
};

export default Projects;
