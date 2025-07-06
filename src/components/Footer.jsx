import React from "react";

const Footer = () => (
  <footer className="w-full bg-transparent mt-20">
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center gap-8">
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 text-center leading-tight">
        Let's work together today!
      </h2>
              <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg shadow transition"
        >
        Start project
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
    <div className="w-full text-center text-zinc-500 text-sm pb-6">
      © 2025 <span className="font-semibold text-zinc-300 ">Keerthi Aanand</span>
    </div>
  </footer>
);

export default Footer; 