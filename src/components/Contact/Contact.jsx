import React, { useState } from "react";
import "./contact.css";
import { Github, Link, Linkedin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's talk about everything!</h3>
            <p className="contact-text">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              vision.
            </p>

            <div className="info-box">
              <div className="info-item">
                <div className="info-icon">
                  <i className="icon-location"></i>
                </div>
                <div className="info-content">
                  <h4 className="info-title">Location</h4>
                  <p className="info-detail">Yerevan, Armenia</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="icon-mail"></i>
                </div>
                <div className="info-content">
                  <h4 className="info-title">Gmail</h4>
                  <p className="info-detail">arsenghazaryan011@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="icon-phone"></i>
                </div>
                <div className="info-content">
                  <h4 className="info-title">Phone</h4>
                  <p className="info-detail">+374 98 78 98 27</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              
              <a href="https://github.com/ArsenKazaryanJS" className="social-link">
              <Github />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=98789827" className="social-link">
              <Phone />
              </a>
              <a href="https://www.linkedin.com/in/arsen-ghazaryan-b878a22a8/" className="social-link">
              <Linkedin />
              </a>
              <a href="https://t.me/ArsenFlare" className="social-link">
              <Send />
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Subject (Optional)"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn form-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
