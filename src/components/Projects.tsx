import React from "react";

const projects = [
    {
      title: 'Flop App',
      description: 'Social media for poker players',
      image: '/path-to-image',
    },
    {
      title: 'Lendscape',
      description: 'Lend and Borrow Dashboard',
      image: '/path-to-image',
    },
    {
      title: 'Tribe.so',
      description: 'Admin onboarding',
      image: '/path-to-image',
    },
    {
      title: 'Primo’s Dashboard',
      description: 'Financial tracking made easy',
      image: '/path-to-image',
    },
  ];
  
  const Projects = () => {
    return (
      <section id="works" className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-lg">
              <img src={project.image} alt={project.title} className="mb-4 rounded-md" />
              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  