import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  gitHubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  { id: 1, title: 'SONA-INTERNATIONAL-CONFERENCE-ON-GREEN-COMPUTING-FOR-COMMUNICATION-TECHNOLOGIES', description: 'Web Application', gitHubUrl: 'https://github.com/Visweshvar-Axel/SONA-INTERNATIONAL-CONFERENCE-ON-GREEN-COMPUTING-FOR-COMMUNICATION-TECHNOLOGIES.git', demoUrl: "https://cukerala.ac.in/conference/home.html" },
  { id: 2, title: 'International Conference Bioresource Technology for Sustainable Development', description: 'Web Application', gitHubUrl: 'https://github.com/Visweshvar-Axel/International-conference-2023', demoUrl: "https://cukerala.ac.in/conference/home.html" },
  { id: 3, title: 'BERT-Funetuned-model-comment-sentiment-analysis', description: 'AI finetuning + Web Application', gitHubUrl: 'https://github.com/Visweshvar-Axel/pretrained-comment-sentiment-analysis-model', demoUrl: "https://github.com/Visweshvar-Axel/pretrained-comment-sentiment-analysis-model" },
];

const Project: React.FC = () => {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">GitHub URL</a>
              <br />
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo URL</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Project;
