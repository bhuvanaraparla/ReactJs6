import React from 'react';
import './ContactMe.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="contact-me-box">
        <h2 className="contact-me-heading">Contact Me</h2>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/bhuvana-raparla-841756227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" alt='linkedin' className='social-icon'/>
          </a>
          <a
            href="https://github.com/bhuvanaraparla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src='https://cdn-icons-png.flaticon.com/128/4926/4926624.png' alt='github' className="social-icon" />
          </a>
        </div>
        <a
            href="bhuvanaraparla7677@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src='https://cdn-icons-png.flaticon.com/128/561/561127.png' alt='github' className="social-icon" />
          </a>        
      </div>
    </section>
  );
};

export default ContactMe;
