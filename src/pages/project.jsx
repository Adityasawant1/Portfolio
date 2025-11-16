import React from "react";
import "../style/project.css";
import projectImg from '../assets/flight.jpg';
import ProjectCard from "../components/projectCard";

const projects = [
  {
    title: "Client-Server Assistance System",
    description:
      "A Java Swing & MySQL-based desktop app to manage student records, room allocation, and fee details.A Java Swing & MySQL-based desktop app to manage student records, room allocation, and fee details.",
    image:projectImg,
    link: "#",
    source: "#",
  },  
  {
    title: "Avalon-Mobile App",
    description:
      "A web-based inventory and billing system built with Hibernate, JSP, and MySQL for managing book stock efficiently.",
      image:projectImg,
    link: "#",
    source: "#",
  },
   {
    title: "Client-Server Assistance System",
    description:
      "A Java Swing & MySQL-based desktop app to manage student records, room allocation, and fee details.A Java Swing & MySQL-based desktop app to manage student records, room allocation, and fee details.",
    image:projectImg,
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
            link={proj.link}
            source={proj.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
