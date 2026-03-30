import React from "react";
import "../style/project.css";
import projectImg from '../assets/profileImage.png';
import projectImg1 from '../assets/lan.png';
import ProjectCard from "../components/projectCard";

const projects = [
  {
    title: "RealMart – Quick Commerce Application",
    description:
      "Built a full-stack quick commerce application using Flutter and Spring Boot, enabling product browsing, cart management, and order placement. Designed RESTful APIs for order, authentication, and payment workflows. Integrated Razorpay payment gateway with webhooks for real-time payment verification. Implemented JWT-based authentication and developed scalable backend architecture using Hibernate/JPA and MySQL.",
    image: projectImg, // add your image here
    tags: ["#Flutter", "#SpringBoot", "#MySQL", "#Razorpay", "#JWT", "#RESTAPI"],
    link: "#", // add live link if deployed
    source: "https://github.com/your-username/realmart", // update repo link
  },

  {
    title: "Contact Management System",
    description:
      "Developed a scalable full-stack web application using React.js and Spring Boot following MVC architecture. Implemented JWT-based authentication with role-based access control (RBAC). Designed RESTful APIs and managed relational data using Hibernate/JPA with MySQL (AWS RDS). Integrated AWS S3 for image storage and deployed backend on AWS EC2 and frontend on Vercel.",
    image: projectImg,
    tags: ["#ReactJS", "#SpringBoot", "#MySQL", "#AWS", "#JWT", "#RESTAPI"],
    link: "#",
    source: "https://github.com/Adityasawant1/ContactAppFrontend",
  },

  {
    title: "Client-Server Assistance System",
    description:
      "Developed a real-time client-server application using Java Socket Programming with multi-threaded architecture for handling concurrent requests. Implemented IP-based device tracking for accurate request management. Integrated MySQL using JDBC for persistent storage and automated PDF report generation using the iText library.",
    image: projectImg1,
    tags: ["#Java", "#SocketProgramming", "#Multithreading", "#MySQL", "#JDBC"],
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
