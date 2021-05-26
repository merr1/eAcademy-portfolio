import React from "react";

const Project = ({ name, demoHref, sourceHref, src }) => {
  return (
    <div className="proj">
      <h1>{name}</h1>

      <img className="imgP" src={src} alt="project_img" />

      <div className="row">
        <a href={demoHref} rel="noreferrer" target="_blank">
          <div className="button">live demo</div>
        </a>
        <a href={sourceHref} rel="noreferrer" target="_blank">
          <div className="button">source</div>
        </a>
      </div>
    </div>
  );
};
export default Project;
