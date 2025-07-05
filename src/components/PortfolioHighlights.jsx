import React from "react";

const projects = [
  {
    title: "Full stack music app",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    link: "#",
    tags: ["API", "MVC", "Development"],
    bg: "bg-gradient-to-tr from-yellow-200 via-yellow-400 to-yellow-500"
  },
  {
    title: "Free stock photo app",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "#",
    tags: ["API", "SPA"],
    bg: "bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-700"
  },
  {
    title: "Recipe app",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    link: "#",
    tags: ["Development", "API"],
    bg: "bg-gradient-to-tr from-red-200 via-red-400 to-red-500"
  },
  {
    title: "Real estate portal",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#",
    tags: ["SPA", "API"],
    bg: "bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-600"
  },
  {
    title: "E-commerce UI kit",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    link: "#",
    tags: ["UI", "Kit"],
    bg: "bg-gradient-to-tr from-pink-200 via-pink-400 to-pink-500"
  },
  {
    title: "Admin dashboard",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    link: "#",
    tags: ["Dashboard", "Admin"],
    bg: "bg-gradient-to-tr from-yellow-100 via-yellow-300 to-yellow-500"
  },
];

const PortfolioHighlights = () => (
  <section className="w-full max-w-6xl mx-auto px-4 mt-20 mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">My portfolio highlights</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-zinc-900/80 rounded-2xl shadow-lg p-4 flex flex-col h-full">
          <div className={`rounded-xl overflow-hidden mb-4 aspect-video ${project.bg}`}>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 p-2 rounded-lg bg-sky-500 hover:bg-sky-600 transition text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0 0h6m-6 0v-6" />
                  </svg>
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