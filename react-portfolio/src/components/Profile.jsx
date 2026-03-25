import React from "react";

export default function Profile() {
  return (
    <section id="profile" className="profile section">
      <div className="profile-inner">
        <div className="picture">
          <img src="/assets/profile-pic.svg" alt="profile" />
        </div>
        <div className="hero">
          <p className="muted">Hello, I'm</p>
          <h1>Korsiye Bochora</h1>
          <p className="role">Fullstack Developer</p>
          <div className="cta">
            <button
              className="btn primary"
              onClick={() => window.open("/assets/Korsiye_Bochora_CV.pdf")}
            >
              Download CV
            </button>
            <a className="btn ghost" href="#contact">
              Contact Info
            </a>
          </div>
          <div className="socials">
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <img src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <img src="/assets/github.svg" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
