import React from "react";

const education = [
  {
    school: "Sri Eshwar College of Engineering",
    degree: "B.E. Computer Science and Engineering",
    years: "2024 - 2028",
    desc: "Intermediate in Web Development"
  },
  {
    school: "The Optimus Public School",
    degree: "Higher Secondary (12th)",
    years: "2023 - 2024",
    desc: "Completed with A+ Grade in Computer Science"
  },
];

const EducationSection = () => (
  <section className="w-full max-w-3xl mx-auto px-4 mt-16 mb-8">
    <h2 className="text-xl md:text-3xl font-bold text-zinc-100 mb-8">EDUCATION</h2>
    <div className="relative pl-6 border-l-2 border-emerald-500/40">
      {education.map((edu, idx) => (
        <div key={idx} className="relative mb-12 last:mb-0 group">
          {/* Timeline dot */}
          <span className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-zinc-900 group-hover:bg-emerald-400 transition"></span>
          {/* Card bubble */}
          <div className="bg-zinc-900/90 rounded-xl p-6 shadow-lg border border-zinc-800 ml-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">{edu.years}</span>
              <span className="text-lg font-semibold text-zinc-100">{edu.school}</span>
            </div>
            <div className="text-zinc-400 text-sm mb-1">{edu.degree}</div>
            <div className="text-zinc-300 text-sm">{edu.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection; 