import React from "react";

const projects = [
  {
    title: "Apple Clone",
    img: "/assets/project-1.svg",
    repo: "https://github.com/Korsiyee/Apple-Clone",
  },
  {
    title: "BBC News Classifier",
    img: "/assets/project-2.svg",
    repo: "https://github.com/Korsiyee/BBC-News-Classifier",
  },
  {
    title: "Nokia Snake Game",
    img: "/assets/project-3.svg",
    repo: "https://github.com/Korsiyee/Nokia-Snake-Game",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <p className="muted">Browse My Recent</p>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <div className="project-actions">
              <a
                className="btn ghost"
                href={p.repo}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a className="btn primary" href="#" aria-disabled>
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
