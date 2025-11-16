import React from "react";
import "../style/projectCard.css";

const ProjectCard = ({ title, description, image, link, source }) => {
  return (
    <div className="card">
      {/* Replace SVG with Image */}
      <img
        src={image}
        alt={title}
        className="card__image"
      />

      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <div className="card__buttons">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="card_button">Live</button>
          </a>
          <a href={source} target="_blank" rel="noopener noreferrer">
            <button className="card_button">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
