import React from 'react';
import './skillsSection.css';

export const SkillsSection = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 80 },
        { name: 'JavaScript', percentage: 60 },
        { name: 'React', percentage: 70 },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 60 },
        { name: 'Express', percentage: 65 },
        { name: 'MongoDB', percentage: 60 },
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', percentage: 85 },
        { name: 'VS Code', percentage: 90 },
        { name: 'Figma', percentage: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skillsData.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="skill-group">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

