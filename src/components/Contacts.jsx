import React from "react";
import git from "../img/github.svg";
import mail from "../img/mail.svg";
import li from "../img/linkedin.svg";

const Contacts = () => {
  const links = [
    {
      href: "https://github.com/merr1",
      src: git,
      alt: "giticon",
    },
    {
      href: "https://mail.google.com/mail/u/0/?fs=1&to=jabishvili31@gmail.com&su=I+saw+your+portfolio&tf=cm",
      src: mail,
      alt: "mailicon",
    },
    {
      href: "https://www.linkedin.com/in/meri-jabishvili",
      src: li,
      alt: "linedinicon",
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
      </div>
      <div className="contact-links">
        {links.map((item) => (
          <a
            id="profile-link"
            rel="noreferrer"
            href={item.href}
            target="_blank"
            class="contact-details"
          >
            <img className="icon" src={item.src} alt={item.alt} />
          </a>
        ))}
      </div>
    </section>
  );
};
export default Contacts;
