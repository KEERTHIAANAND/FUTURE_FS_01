import React from "react";

const sitemap = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Reviews", link: "#reviews" },
  { name: "Contact me", link: "#contact" },
];

const socials = [
  { name: "GitHub", link: "https://github.com/" },
  { name: "LinkedIn", link: "https://linkedin.com/" },
  { name: "Twitter X", link: "https://x.com/" },
  { name: "Instagram", link: "https://instagram.com/" },
  { name: "CodePen", link: "https://codepen.io/" },
];

const Footer = () => (
  <footer className="w-full bg-transparent mt-20">
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
      {/* Left */}
      <div className="flex-1 flex flex-col items-center md:items-start gap-8">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 text-center md:text-left leading-tight">
          Let's work<br />together today!
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400 hover:bg-sky-500 text-zinc-900 font-semibold text-lg shadow transition"
        >
          Start project
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      {/* Right */}
      <div className="flex-1 flex flex-col md:flex-row justify-end gap-12 w-full">
        <div>
          <div className="font-semibold text-zinc-200 mb-2">Sitemap</div>
          <ul className="space-y-1">
            {sitemap.map((item) => (
              <li key={item.name}>
                <a href={item.link} className="text-zinc-300 hover:text-sky-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-zinc-200 mb-2">Socials</div>
          <ul className="space-y-1">
            {socials.map((item) => (
              <li key={item.name}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-sky-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full text-center text-zinc-500 text-sm pb-6">
      © 2025 <span className="font-semibold text-zinc-300 gap-30">Keerthi Aanand</span>
    </div>
  </footer>
);

export default Footer; 