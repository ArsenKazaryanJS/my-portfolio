import React from "react";
import "./herosection.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Arsen Kazaryan</span>
            <span className="role">Web Developer</span>
          </h1>
          <p className="hero-description">
            I create stunning web experiences with a focus on clean code and
            beautiful designs.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn hero-btn">
              See My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            <div className="hero-blob"></div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
