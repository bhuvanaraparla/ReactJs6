// src/components/About/About.js
import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h1>Raparla Bhuvana Sneha</h1>
          <p>
          Hello! I'm glad you're here.<br></br>
I am a motivated and hardworking student who is now attending VITAP University to complete my B.Tech in computer science and engineering. My interest and passion for knowledge propel me to investigate the rapidly changing world of technology, with a particular concentration on web development and software development. I'm dedicated to learning the knowledge and abilities required to succeed in the IT business as a student.I fully think that there are countless potential for creativity and problem-solving in the digital age, and I am thrilled to make a contribution to this dynamic environment.

        </p>
        </div>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/bhuvana-raparla-841756227" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default About;