import React from "react";

export default function About() {
  return (
    <section id="about" className="section about">
      <p className="muted">Get To Know More</p>
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="cards">
          <div className="card">
            <img src="/assets/experience.svg" alt="Experience" />
            <h3>Experience</h3>
            <p>4+ months — Fullstack Developer</p>
          </div>
          <div className="card">
            <img src="/assets/education.svg" alt="Education" />
            <h3>Education</h3>
            <p>B.Sc. Degree</p>
          </div>
        </div>
        <div className="about-text">
          <p>
            Passionate fullstack developer with a focus on building responsive,
            accessible user interfaces and scalable backend services. I enjoy
            crafting clean code and beautiful experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
