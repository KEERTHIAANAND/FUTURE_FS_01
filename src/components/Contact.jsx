import React, { useState } from "react";

const socials = [
  {
    name: "GitHub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    link: "https://github.com/KEERTHIAANAND"
  },
  {
    name: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    link: "https://www.linkedin.com/in/keerthi-aanand-k-s-099b80271/"
  },
  {
    name: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    link: "https://www.instagram.com/_k._s._k._a._/?next=%2F"
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success"); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    // Don't show any flash yet, wait for API response

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setFlashMessage("Message sent successfully!");
        setFlashType("success");
        setShowSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setShowSuccess(false);
          setFlashMessage("");
        }, 2000); // 2 seconds
      } else {
        setFlashMessage(data.error || "Failed to send message.");
        setFlashType("error");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setFlashMessage("");
        }, 2000);
      }
    } catch (error) {
      setFlashMessage("Failed to send message. Please try again later.");
      setFlashType("error");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFlashMessage("");
      }, 2000);
    }
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-12 items-center justify-between">
      {/* Flash Message */}
      {showSuccess && (
        <div className={"fixed top-8 left-1/2 transform -translate-x-1/2 bg-zinc-900 border px-6 py-4 rounded-lg flex items-center gap-3 shadow-lg z-50"}
          style={{ borderColor: '#FFD700', color: '#FFD700' }}>
          {flashType === "success" ? (
            <svg width="32" height="32" viewBox="0 0 24 24">
              <polyline
                className="animated-tick"
                points="6 12 10 16 18 8"
              />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24">
              <line x1="6" y1="6" x2="18" y2="18" stroke="#ef4444" strokeWidth="3"/>
              <line x1="6" y1="18" x2="18" y2="6" stroke="#ef4444" strokeWidth="3"/>
            </svg>
          )}
          <span className="font-semibold text-lg">{flashMessage}</span>
        </div>
      )}
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
      <form
        className="flex-1 w-full max-w-xl bg-transparent flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-zinc-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Jack"
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-zinc-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="jack@example.com"
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-zinc-300 mb-1">Message</label>
          <textarea
            rows={4}
            placeholder="Hello!"
            className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-2 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

// Add tick animation CSS
const style = document.createElement('style');
style.innerHTML = `@keyframes tick { 0% { stroke-dashoffset: 16; } 100% { stroke-dashoffset: 0; } } .animated-tick { stroke: #FFD700; stroke-width: 3; fill: none; stroke-dasharray: 16; stroke-dashoffset: 16; animation: tick 0.5s ease forwards; }`;
document.head.appendChild(style);

export default Contact; 