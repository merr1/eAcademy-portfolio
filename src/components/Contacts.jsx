import React from "react";
import git from "../img/github.svg";
const Contacts = () => {
  return (
    <section id="contact" class="contact-section">
      <div class="contact-section-header">
        <h2>Let's work together...</h2>
      </div>
      <div class="contact-links">
        <a
          id="profile-link"
          rel="noreferrer"
          href="https://github.com/merr1"
          target="_blank"
          class="contact-details"
        >
          <img className="icon" src={git} alt="giticon" />
          GitHub
        </a>
      </div>
    </section>
  );
};
export default Contacts;
