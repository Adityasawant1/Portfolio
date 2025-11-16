import React from "react";
import "../style/about.css";
import profilePic from "../assets/adi.png";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-card">
        {/* LEFT SECTION - Image */}
        <div className="about-left">
          <div className="about-image">
           <div id="ghost">
  <div id="red">
    <div id="pupil"></div>
    <div id="pupil1"></div>
    <div id="eye"></div>
    <div id="eye1"></div>
    <div id="top0"></div>
    <div id="top1"></div>
    <div id="top2"></div>
    <div id="top3"></div>
    <div id="top4"></div>
    <div id="st0"></div>
    <div id="st1"></div>
    <div id="st2"></div>
    <div id="st3"></div>
    <div id="st4"></div>
    <div id="st5"></div>
    <div id="an1"></div>
    <div id="an2"></div>
    <div id="an3"></div>
    <div id="an4"></div>
    <div id="an5"></div>
    <div id="an6"></div>
    <div id="an7"></div>
    <div id="an8"></div>
    <div id="an9"></div>
    <div id="an10"></div>
    <div id="an11"></div>
    <div id="an12"></div>
    <div id="an13"></div>
    <div id="an14"></div>
    <div id="an15"></div>
    <div id="an16"></div>
    <div id="an17"></div>
    <div id="an18"></div>
  </div>
  <div id="shadow"></div>
</div>

          </div>
        </div>

        {/* RIGHT SECTION - Content */}
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hello! I’m <strong>Aditya Sawant</strong>, a passionate{" "}
            <span>Full Stack Developer</span> with a strong foundation in{" "}
            <span>Java, React.js, and Spring Boot</span>. I enjoy building
            modern, responsive, and user-friendly web applications that solve
            real-world problems.
          </p>

          <p>
            With experience in both frontend and backend development, I
            specialize in creating clean, scalable, and efficient software
            solutions. I love working with technologies like{" "}
            <span>React.js, Node.js, MySQL, and Hibernate</span>.
          </p>

          <p>
            Apart from coding, I enjoy learning new tools, exploring Linux, and
            contributing to open-source projects.
          </p>

          <a href="#contact" className="button">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;
