import React from "react";
import "../style/skill.css";
import testImage from "../assets/flight.jpg"; // ✅ Using this image for all skills

const skills = [
  { name: "HTML", image: testImage, level: "Advanced" },
  { name: "CSS", image: testImage, level: "Advanced" },
  { name: "JavaScript", image: testImage, level: "Intermediate" },
  { name: "React.js", image: testImage, level: "Intermediate" },
  { name: "Java", image: testImage, level: "Advanced" },
  { name: "Spring Boot", image: testImage, level: "Intermediate" },
  { name: "MySQL", image: testImage, level: "Advanced" },
];
const SkillPage = () => {
  return (
    <div id="skills" className="skill-container">
      <div className="skill-header">
        <h2>My Skills</h2>
        <p>
          Here are some of the technologies and tools I’ve mastered through my
          academic journey and real-world projects.
        </p>
      </div>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
