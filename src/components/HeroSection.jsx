import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto min-h-[calc(100vh-48px)] px-4 flex flex-col md:flex-row items-center justify-between gap-8 items-center">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start gap-6">
        {/* Status Row */}
        <div className="flex items-center gap-2">
          <img
            src="/public/images/avatar-1.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover border-2 border-zinc-800"
          />
          <span className="flex items-center gap-1 text-sm text-zinc-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for work
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">
          Building Scalable<br />
          Modern Websites<br />
          for the Future
        </h1>
        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <a
            href="#"
            className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg shadow transition"
          >
            Download CV <span className="ml-1">&#8595;</span>
          </a>
          <a
            href="#"
            className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium rounded-lg shadow border border-zinc-700 transition flex items-center gap-1"
          >
            Scroll down <span>&#8595;</span>
          </a>
        </div>
      </div>
      {/* Right Side - Demo Pic */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/public/images/people-1.jpg"
          alt="Demo profile"
          className="w-[320px] h-[380px] object-cover rounded-3xl shadow-2xl border-4 border-zinc-900"
        />
      </div>
    </section>
  );
};

export default HeroSection; 