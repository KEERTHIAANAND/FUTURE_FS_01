import React from "react";

const tools = [
  {
    name: "Figma",
    icon: "/images/figma.svg",
    desc: "Design tool",
  },
  {
    name: "CSS",
    icon: "/images/css3.svg",
    desc: "User Interface",
  },
  {
    name: "JavaScript",
    icon: "/images/javascript.svg",
    desc: "Interaction",
  },
  {
    name: "NodeJS",
    icon: "/images/nodejs.svg",
    desc: "Web Server",
  },
  {
    name: "ExpressJS",
    icon: "/images/expressjs.svg",
    desc: "Node Framework",
  },
  {
    name: "MongoDB",
    icon: "/images/mongodb.svg",
    desc: "Database",
  },
  {
    name: "React",
    icon: "/images/react.svg",
    desc: "Framework",
  },
  {
    name: "TailwindCSS",
    icon: "/images/tailwindcss.svg",
    desc: "User Interface",
  },
];

const AboutAndTools = () => (
  <section id="about" className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-16 mt-12">
    {/* Intro Card */}
    <div className="relative bg-zinc-800/90 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-start max-w-3xl mx-auto overflow-hidden">
      <p className="text-lg md:text-xl text-zinc-100 mb-8 font-serif">
        Welcome! I'm Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise, I transform your vision into digital masterpiece that excels in both appearance and performance.
      </p>
      <div className="flex gap-12 mt-2">
        <div>
          <div className="text-4xl font-bold text-white drop-shadow-sm">45+</div>
          <div className="text-zinc-400 text-sm mt-1 font-sans">Project done</div>
        </div>
      </div>
      {/* Logo at bottom right */}
      <img
        src="/images/logo.svg"
        alt="Logo"
        className="absolute bottom-4 right-4 w-10 h-10 opacity-80 pointer-events-none select-none"
        draggable="false"
      />
    </div>

    {/* Tools Section */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">Essential Tools I use</h2>
      <p className="text-zinc-400 mb-8 max-w-2xl">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-4 bg-zinc-900/80 border-2 border-zinc-700 rounded-xl p-4 shadow transition-all duration-200 hover:border-emerald-400 hover:shadow-emerald-400/20 hover:bg-zinc-800"
          >
            <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
            <div>
              <div className="font-medium text-zinc-100">{tool.name}</div>
              <div className="text-zinc-400 text-xs">{tool.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutAndTools; 