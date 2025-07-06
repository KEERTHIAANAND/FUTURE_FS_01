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
    <div className="relative bg-zinc-800/90 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-start max-w-4xl mx-auto overflow-hidden">
      <p className="text-lg md:text-xl text-zinc-100 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Welcome! I'm Keerthi Aanand, a passionate web developer at the beginning of my journey. I'm continuously learning and improving my skills in building clean, functional websites. With a curious mind and a love for problem-solving, I enjoy working across both design and development. I may be new, but I'm capable of multitasking and turning ideas into simple, effective web solutions.
      </p>
      <div className="flex gap-12 mt-2">
        <div>
          <div className="text-4xl font-bold text-white drop-shadow-sm">
            10<span className="text-emerald-400">+</span>
          </div>
          <div className="text-zinc-400 text-sm mt-1 font-sans">Projects done</div>
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
      <h2 className="text-xl md:text-4xl font-bold text-zinc-100 mb-2">ESSENTIAL TOOLS</h2>
      <p className="text-zinc-400 mb-8 max-w-2xl">
        Discover the powerful tools and technologies.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center gap-2 bg-zinc-900/80 border-2 border-zinc-700 rounded-xl p-3 shadow transition-all duration-200 hover:border-emerald-400 hover:shadow-emerald-400/20 hover:bg-zinc-800"
          >
            <img src={tool.icon} alt={tool.name} className="w-8 h-8 mb-1" />
            <div className="font-medium text-zinc-100 text-center">{tool.name}</div>
            <div className="text-zinc-400 text-xs text-center">{tool.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutAndTools; 