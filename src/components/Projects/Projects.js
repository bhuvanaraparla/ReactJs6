import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Automatic Smart Street lights', description: 'The main basis of this project is to reduce power consumption,to prevent accidents and for security.' },
  { id: 2, title: 'Plant Disease detection', description: 'Working on plant disease detection android application in android studio using java.This application helps farmers to detect crop health condition easily and included any other helpful features' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I have worked with..</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
  );
};
export default Projects;