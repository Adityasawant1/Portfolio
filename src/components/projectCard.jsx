import React from "react";
import Tilt from "react-parallax-tilt";
import "../style/projectCard.css";

const ProjectCard = ({ title, description, image, link, source, tags = [] }) => {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05} transitionSpeed={2500}>
      <div className="card">
        <div className="card__image-container">
          <img
            src={image}
            alt={title}
            className="card__image"
          />
          <div className="card__floating-links">
            
            <a href={source} aria-label="Source Code" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>

          <div className="card__tags">
            {tags.map((tag, index) => {
              // Pick a predefined neon color class based on index or name length hash
              const colors = ['tag-blue', 'tag-pink', 'tag-green'];
              const colorClass = colors[index % colors.length];
              return (
                <span key={index} className={`card__tag ${colorClass}`}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
