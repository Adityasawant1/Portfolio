import React, { useEffect } from 'react';
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



const Home = () => {
    useEffect(()=>{
        const typed = new Typed('.multiple-text',{
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
                <a href="https://www.instagram.com/adi_sawant_96/"><i className="bx bxl-instagram"></i></a>
                <a href="#"><i className="bx bxl-facebook"></i></a>
            </div>

          </div>
        </section>
      </div>

      {/* Right Section - 75% */}
      <div className="right-section">
        
        <div className="hamburger" id="hamburger">
          
        </div>

        <nav className="navbar" id="navbar">
            <a href="#home" style={{ "--i": 1 }}>Home</a>
            <a href="#about" style={{ "--i": 2 }}>About</a>
            <a href="#skills" style={{ "--i": 3 }}>Skills</a>
            <a href="#projects" style={{ "--i": 4 }}>Projects</a>
            <a href="#contact" style={{ "--i": 5 }}>Contact</a>
        </nav>
          <About />
          <SkillPage />
          <ProjectPage/>
        <Contact />
     </div>
    </div>
  );
};

export default Home;
