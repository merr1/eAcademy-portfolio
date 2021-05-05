import React from "react";
import git from "../img/github.svg";
import mail from "../img/mail.svg";

const Contacts = () => {
  return (
    <section className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
      </div>
      <div className="contact-links">
        <a
          id="profile-link"
          rel="noreferrer"
          href="https://github.com/merr1"
          target="_blank"
          class="contact-details"
        >
          <img className="icon" src={git} alt="giticon" />
        </a>
        <a
          id="profile-link"
          rel="noreferrer"
          href="https://mail.google.com/mail/u/0/?fs=1&to=jabishvili31@gmail.com&su=I+saw+your+portfolio&tf=cm"
          target="_blank"
          class="contact-details"
        >
          <img className="icon" src={mail} alt="mailicon" />
        </a>
      </div>
    </section>
  );
};
export default Contacts;
