import React, { useState } from "react";
import "./projectsSection.css";
import react_site_clone from "../../images/react_site_clone.png";
import task_manager from "../../images/task_manager.png";
import paper_rock from "../../images/paper-rock.png";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 3,
      title: "Shop web Site Not ready",
      description: "not ready",
      image:
        "https://via.placeholder.com/600x400/121212/ffffff?text=Portfolio+Template",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "Blog fullStack app Not ready",
      description: "not ready",
      image:
        "https://via.placeholder.com/600x400/4d80e4/ffffff?text=Weather+App",
      technologies: ["React Native", "API Integration"],
    },
    {
      id: 5,
      title: "Movie App",
      description:"not ready",
      image:"https://via.placeholder.com/600x400/2ecc71/ffffff?text=Task+Management",
      technologies: ["Vue.js", "Vuex", "Firebase"],
    },
    {
      id: 1,
      title: "React-Site_Clone",
      description:"In this project, I aimed to create a clone of a real-world website using React.js without relying on any Figma design or pre-made mockups. The goal was to replicate the website's functionality and design purely through observation and coding. Additionally, I ensured that the site is fully responsive, providing an optimal user experience across all",
      image: react_site_clone,
      technologies: ["React", "Css"],
      projectLink: "https://arsenkazaryanjs.github.io/react-site-clone/",
      projectGithub:"https://github.com/ArsenKazaryanJS/react-site-clone?tab=readme-ov-file",
    },
    {
      id: 2,
      title: "Task-Manager",
      description: `This project is a web application for task management (Task Manager). It allows users to add, edit, delete, and filter tasks. The main features include
              Creating new tasks with a title, description, and due date.
              Editing existing tasks.
              Changing the status of tasks (completed/pending).
              Filtering tasks by status and searching by text.
              Sorting tasks by various parameters.
              The project is built on`,
      image: task_manager,
      technologies: ["React", "CSS"],
      projectLink: "https://arsenkazaryanjs.github.io/Task-Manager/",
      projectGithub: "https://github.com/ArsenKazaryanJS/Task-Manager",
    },
    {
      id: 6,
      title: "Paper-rock",
      description:
        "Choice: The user can choose his variant (paper, rock or scissors). Random robot selection: The robot randomly chooses its variant. Game result: Calculates who won, the user or the robot. Game reset: The user can reset the game and start over.",
      image: paper_rock,
      technologies: ["React", "Css"],
      projectLink: "https://ArsenKazaryanJS.github.io/paper-rock/",
      projectGithub: "https://github.com/ArsenKazaryanJS/paper-rock?tab=readme-ov-file",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((el) => (
            <div key={el.id} className="project-card">
              <div className="project-image">
                <img src={el.image} alt={el.title} />
                <div className="project-overlay">
                  <a href={el.projectLink} className="project-link">
                    View Project
                  </a>
                  <a href={el.projectGithub} className="project-link">
                    View Github
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{el.title}</h3>
                <p className="project-description">{el.description}</p>
                <div className="project-technologies">
                  {el.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
