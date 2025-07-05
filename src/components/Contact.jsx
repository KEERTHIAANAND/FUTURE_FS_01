import React from "react";

const socials = [
  {
    name: "GitHub",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    ),
    link: "https://github.com/"
  },
  {
    name: "LinkedIn",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v5h-4v-5a2 2 0 00-4 0v5h-4v-9h4v1.528A4.978 4.978 0 0116 8zM2 9h4v12H2z" />
      </svg>
    ),
    link: "https://linkedin.com/"
  },
  {
    name: "X",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.94 2.94a1.5 1.5 0 012.12 2.12l-6.36 6.36 6.36 6.36a1.5 1.5 0 01-2.12 2.12l-6.36-6.36-6.36 6.36a1.5 1.5 0 01-2.12-2.12l6.36-6.36-6.36-6.36A1.5 1.5 0 015.58 2.94l6.36 6.36 6.36-6.36z" />
      </svg>
    ),
    link: "https://x.com/"
  },
  {
    name: "Instagram",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
    link: "https://instagram.com/"
  },
];

const Contact = () => (
  <section id="contact" className="w-full max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-12 items-center justify-between">
    {/* Left Side */}
    <div className="flex-1 flex flex-col items-start justify-center gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">Contact me for<br />collaboration</h2>
        <p className="text-zinc-400 mb-8 max-w-md">
          Reach out today to discuss your project needs and start collaborating on something amazing!
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 p-2 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition"
            aria-label={s.name}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
    {/* Right Side - Contact Form */}
    <form className="flex-1 w-full max-w-xl bg-transparent flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-zinc-300 mb-1">Name</label>
          <input
            type="text"
            placeholder="Henry Clark"
            className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-zinc-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="henry@example.com"
            className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-zinc-300 mb-1">Message</label>
        <textarea
          rows={4}
          placeholder="Hi!"
          className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <button
        type="submit"
        className="w-full mt-2 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg transition"
      >
        Submit
      </button>
    </form>
  </section>
);

export default Contact; 