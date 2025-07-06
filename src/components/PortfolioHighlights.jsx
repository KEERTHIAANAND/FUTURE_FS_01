import React from "react";

const projects = [
  {
    title: "TaskMate",
    image: "https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525",
    link: "https://taskmateonline.netlify.app/",
    tags: ["React", "CSS"],
    bg: "bg-gradient-to-tr from-yellow-200 via-yellow-400 to-yellow-500"
  },
  {
    title: "Attendence Tracker",
    image: "https://hrsprout.com/images/blog/attendance-tracker-basics.png?v=1665742645055882439",
    link: "https://mahayogamschl-attendence.netlify.app/",
    tags: ["React", "CSS"],
    bg: "bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-700"
  },
  {
    title: "Event Horizons",
    image: "https://www.green-event.de/wp-content/uploads/2020/07/GET_Portfolio_Public_Events_1024x680.jpg",
    link: "https://heroic-bavarois-b9fd5d.netlify.app/",
    tags: ["Vite + React", "Tailwind CSS", "Python", "MongoDB"],
    bg: "bg-gradient-to-tr from-red-200 via-red-400 to-red-500"
  },
  {
    title: "Weather Analyzer",
    image: "https://t4.ftcdn.net/jpg/11/11/36/07/360_F_1111360767_W4BiD5o0WnRQkN8bPGQ1WXfBZ9rCYy4K.jpg",
    link: "https://illustrious-arithmetic-58d5aa.netlify.app/",
    tags: ["Vite + React", "CSS"],
    bg: "bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-600"
  }
];

const PortfolioHighlights = () => (
  <section id="projects" className="w-full max-w-6xl mx-auto px-4 mt-20 mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">MY PROJECTS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-zinc-900/80 rounded-2xl shadow-lg p-4 flex flex-col h-full">
          <div className={`rounded-xl overflow-hidden mb-4 aspect-video ${project.bg}`}>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 px-3 py-1 rounded-lg bg-sky-500 hover:bg-sky-600 transition text-white font-semibold text-sm">
                  Demo
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioHighlights; 