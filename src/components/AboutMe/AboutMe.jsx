
import React from 'react';
import './aboutme.css';

const AboutMe = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-image">
            <div className="image-box"></div>
          </div>
          <div className="about-content">
            <h3 className="about-subtitle">Who am I?</h3>
            <p className="about-text">
            I'm a web developer with a eye for innovative design and a keen understanding of techniques geared toward optimum user experience.
            </p>
            <p className="about-text">
            I enjoy turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Arsen Kazaryan</span>
              </div>
              <div className="info-item">
                <span className="info-title">Gmail:</span>
                <span className="info-value">arsenghazaryan011@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">From:</span>
                <span className="info-value">Yerevan, Armenia</span>
              </div>
            </div>
            <a href="#contact" className="btn about-btn">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
