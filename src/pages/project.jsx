import React from "react";
import "../style/project.css";
import projectImg from '../assets/flight.jpg';
import ProjectCard from "../components/projectCard";

const projects = [
  {
    title: "Real Time Chat Application",
    description: "A robust platform for instantaneous communication. Features intuitive UI, secure connections, and real-time message handling from anywhere in the world.",
    image: projectImg,
    tags: ["#reactJS", "#socket.io", "#nodeJs", "#express"],
    link: "#",
    source: "#",
  },
  {
    title: "Vercel Clone - Deploy Projects",
    description: "Simplifies web deployment. With just one click, users can host their projects seamlessly. Features Git integration, automatic scaling, and hassle-free deployment.",
    image: projectImg,
    tags: ["#nextJS", "#tailwind", "#AWS", "#docker", "#ECS"],
    link: "#",
    source: "#",
  },
  {
    title: "Client-Server System",
    description: "A Java Swing & MySQL-based desktop app to manage student records, room allocation, and fee details securely.",
    image: projectImg,
    tags: ["#java", "#swing", "#mysql", "#desktop"],
    link: "#",
    source: "#",
  },
];

const ProjectPage = () => {
  return (
    <div id="projects" className="project-container">
      <div className="project-header">
        <h2>My Projects</h2>
        <p>
          Here’s a showcase of some of the projects I’ve built — each one
          reflects my journey of learning and creating efficient software
          solutions.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            tags={proj.tags}
            link={proj.link}
            source={proj.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
