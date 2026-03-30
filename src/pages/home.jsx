import React, { useEffect, useState } from 'react';
import reactLogo from '../assets/adi.png'
import '../style/home/home.css'
import '../style/home/left.css'
import '../style/home/right.css'
import Typed from 'typed.js';
import Spline from '@splinetool/react-spline';
import Contact from './contact';
import About from './about';
import ProjectPage from './project';
import SkillPage from './skills';
import PacmanGame from '../components/PacmanGame';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Software Developer', 'Backend Developer', 'Java Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="home-container">
      {/* Left Section - 25% */}
      <div className="left-section">
        <section className="home" id="home">
          <a href="#" className="logo">Portfolio.</a>
          <div className="home-img">
            <img src={reactLogo} alt="Portfolio Image" />
          </div>
          <div className="home-content">
            <h2>Aditya Sawant</h2>
            <h3>
              And I'm a <span className="multiple-text"></span>
            </h3>

            <div className="module">
              <Spline className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:lfet-[-2%] h-full' scene="https://prod.spline.design/3ityeosY5hN5e29x/scene.splinecode" />
            </div>

            <div className="social-media">
              <a href="https://www.linkedin.com/in/sawantaditya-96k/" target='_blank'><i className="bx bxl-linkedin"></i></a>
              <a href="https://github.com/Adityasawant1"><i className="bx bxl-github"></i></a>
              <a href="https://leetcode.com/u/Sawant_005/"><img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" 
    alt="LeetCode" 
    style={{ width: "24px", height: "24px" }}
  /></a>
              <a href="https://www.instagram.com/adi_sawant_96/"><i className="bx bxl-instagram"></i></a>
              
            </div>
          </div>
        </section>
      </div>

      {/* Right Section - 75% */}
      <div className="right-section">

        <div className="hamburger" id="hamburger" onClick={toggleMenu}>
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </div>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} id="navbar">
          <a href="#home" style={{ "--i": 1 }} onClick={closeMenu}>Home</a>
          <a href="#about" style={{ "--i": 2 }} onClick={closeMenu}>About</a>
          <a href="#skills" style={{ "--i": 3 }} onClick={closeMenu}>Skills</a>
          <a href="#projects" style={{ "--i": 4 }} onClick={closeMenu}>Projects</a>
          <a href="#contact" style={{ "--i": 5 }} onClick={closeMenu}>Contact</a>
        </nav>
        <PacmanGame />
        <About />
        <SkillPage />
        <ProjectPage />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
