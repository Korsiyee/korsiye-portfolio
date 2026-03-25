import React from "react";

const skills = [
  ["HTML", "Experienced"],
  ["CSS", "Experienced"],
  ["JavaScript", "Basic"],
  ["React", "Basic"],
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <p className="muted">Explore My</p>
      <h2>Experience</h2>
      <div className="skills-grid">
        {skills.map(([name, level]) => (
          <div key={name} className="skill-card">
            <img src="/assets/checkmark.svg" alt="check" />
            <div>
              <h4>{name}</h4>
              <p>{level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
