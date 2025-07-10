import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Web Developer"
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0].slice(0, 1));
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];
    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length - 1));
        }, 30);
      } else {
        setTyping(true);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="w-full max-w-6xl mx-auto min-h-[calc(100vh-48px)] px-4 flex flex-col md:flex-row items-center justify-between gap-8 items-center">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start gap-6">
        {/* Status Row */}
        <div className="flex items-center gap-2">
          <img
            src="/images/avatar-1.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover border-2 border-zinc-800"
          />
          <span className="flex items-center gap-1 text-sm text-zinc-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for work.
          </span>     
        </div> 
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">
          Keerthi Aanand K S
        </h1>
        {/* Typewriter effect for roles */}
        <span className="typewriter-container text-emerald-400 text-xl md:text-2xl font-semibold mt-2 block" style={{minHeight: 32, display: 'inline-block'}}>
          <TypewriterRoles roles={roles} />
        </span>
        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <a
            href="/keerthi_resume.pdf"
            download
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg shadow transition"
          >
            Download CV <span className="ml-1">&#8595;</span>
          </a>
        </div>
      </div>
      {/* Right Side - Demo Pic */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/images/people-1.jpg"
          alt="Demo profile"
          className="w-[320px] h-[380px] object-cover rounded-3xl shadow-2xl border-4 border-zinc-900 animate-slide-in-right"
        />
      </div>
    </section>
  );
};

// TypewriterRoles component using framer-motion
function TypewriterRoles({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRoleIndex((roleIndex + 1) % roles.length);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [roleIndex, roles.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={roleIndex}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.18 }}
        style={{ display: 'inline-block' }}
      >
        {roles[roleIndex]}
      </motion.span>
    </AnimatePresence>
  );
}

export default HeroSection; 