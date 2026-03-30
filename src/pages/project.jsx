import React from "react";
import "../style/project.css";
import projectImg from '../assets/profileImage.png';
import projectImg1 from '../assets/lan.png';
import ProjectCard from "../components/projectCard";

const projects = [
  {
  title: "Contact Management System",
  description: "Built a full-stack Contact Management System using React.js and Spring Boot with JWT-based authentication and authorization. Implemented a User–Contact one-to-many relationship using Hibernate/JPA with MySQL (AWS RDS) for data management. Integrated AWS S3 for contact image storage and deployed the backend on AWS EC2 and the frontend on Vercel, ensuring a secure and scalable application.",
  image: projectImg,
  tags: ["#reactJS", "#Spring Boot", "#MySQL", "#AWS"],
  link: "#",
  source: "https://github.com/Adityasawant1/ContactAppFrontend",
},
  
 {
  title: "Client-Server Assistance System",
  description: "Developed a real-time Java-based client-server support system using socket programming for seamless communication between students and lab technicians, with IP-based device identification for accurate request tracking. Integrated MySQL using JDBC to manage request statuses and generated automated PDF reports using the iText library, improving issue reporting and overall lab efficiency.",
  image: projectImg1,
  tags: ["#java", "#socketProgramming", "#mysql", "#jdbc", "#iText"],
  link: "#",
  source: "https://github.com/Adityasawant1/ClientServer-",
}
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
