import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
}

const projects: Project[] = [
  { id: 1, title: 'Flop App', description: 'Social media for poker players', img: 'project1.jpg' },
  { id: 2, title: 'Lendscape', description: 'Lend and Borrow Dashboard', img: 'project2.jpg' },
  { id: 3, title: 'Tribe.so', description: 'Admin onboarding', img: 'project3.jpg' },
  { id: 4, title: "Primo's Dashboard", description: 'Financial tracking made easy', img: 'project4.jpg' },
];

const Gallery: React.FC = () => {
  return (
    <main className="p-8 bg-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md">
            <img src={`/assets/images/${project.img}`} alt={project.title} className="w-full rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-secondary">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
