import React from "react";
import Tilt from "react-parallax-tilt";
import "../style/skill.css";

const skillCategories = [
  {
    title: "Frontend",
    borderColor: "var(--skill-border-orange)",
    skills: [
      { name: "React Js", icon: "devicon-react-original colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    title: "Mobile Development",
    borderColor: "var(--skill-border-orange)",
    skills: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Dart", icon: "devicon-dart-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "XML", icon: "devicon-xml-plain" },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Android Studio", icon: "devicon-androidstudio-plain colored" },
    ],
  },
  {
    title: "Backend",
    borderColor: "var(--skill-border-teal)",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Spring MVC", icon: "devicon-spring-plain colored" },
      { name: "Spring Boot", icon: "devicon-spring-plain colored" },

      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "Kafka", icon: "devicon-apachekafka-original" },
    ],
  },
  
  {
    title: "DevOps",
    borderColor: "var(--skill-border-teal)",
    skills: [
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "Shell Scripting", icon: "devicon-bash-plain" },
      { name: "CI/CD", icon: "devicon-githubactions-plain colored" },
    ],
  },
  {
    title: "Others",
    borderColor: "var(--skill-border-orange)",
    skills: [
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Eclipse", icon: "devicon-eclipse-plain colored" },
      { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
    ],
  },
];

const SkillPage = () => {
  return (
    <div id="skills" className="skill-container">
      <div className="skill-header">
        <h2>My Skills</h2>
        <p>
          Here are some of the technologies and tools I've mastered through my
          academic journey and real-world projects.
        </p>
      </div>

      <div className="skill-categories-grid">
        {skillCategories.map((category, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            transitionSpeed={2500}
            className={index === skillCategories.length - 1 ? "skill-card-centered" : ""}
          >
            <div
              className="skill-category-card"
              style={{ borderColor: category.borderColor }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-items-grid">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
