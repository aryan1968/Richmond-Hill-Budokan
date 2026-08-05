"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Kitsune Ryu Jiu-Jitsu");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Free trial class inquiry — ${program}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProgram: ${program}\n\n${message}`
    );
    window.location.href = `mailto:rhbudokan@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi placeholder:text-washi-dim/50 focus:border-hanko-bright outline-none transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi placeholder:text-washi-dim/50 focus:border-hanko-bright outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="program" className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
          Program of interest
        </label>
        <select
          id="program"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi outline-none focus:border-hanko-bright transition-colors"
        >
          <option className="bg-sumi">Kitsune Ryu Jiu-Jitsu</option>
          <option className="bg-sumi">OGKK Goju Ryu Karate</option>
          <option className="bg-sumi">Tai Chi &amp; Qigong</option>
          <option className="bg-sumi">Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi placeholder:text-washi-dim/50 focus:border-hanko-bright outline-none transition-colors resize-none"
          placeholder="Tell us about your age, experience, and which evenings work best."
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-hanko-bright text-sumi font-body font-medium px-7 py-4 uppercase tracking-wide text-sm hover:bg-brass-bright transition-colors self-start"
      >
        Send Inquiry
      </button>
    </form>
  );
}
