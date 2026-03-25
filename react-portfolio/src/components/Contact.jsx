import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="muted">Get in Touch</p>
      <h2>Contact Me</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <img src="/assets/email.svg" alt="email" />
          <a href="mailto:bkorsiye@gmail.com">bkorsiye@gmail.com</a>
        </div>
        <div className="contact-card">
          <img src="/assets/linkedin.svg" alt="linkedin" />
          <a href="https://www.linkedin.com">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
