import React from "react";

const Project = ({ name, href, src }) => {
  return (
    <div className="proj">
      <h1>{name}</h1>
      <a href={href} rel="noreferrer" target="_blank">
        <img className="imgP" src={src} alt="project_img" />
      </a>
    </div>
  );
};
export default Project;
