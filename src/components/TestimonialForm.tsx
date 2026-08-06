"use client";

import { useState } from "react";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("Kitsune Ryu Jiu-Jitsu");
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New testimonial submission — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nProgram: ${program}\nRating: ${rating}/5\n\nReview:\n${review}`
    );
    window.location.href = `mailto:rhbudokan@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="t-name" className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
          Your name
        </label>
        <input
          id="t-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi placeholder:text-washi-dim/50 focus:border-hanko-bright outline-none transition-colors"
          placeholder="Your name (or parent's name)"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="t-program" className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
            Program
          </label>
          <select
            id="t-program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi outline-none focus:border-hanko-bright transition-colors"
          >
            <option className="bg-sumi">Kitsune Ryu Jiu-Jitsu</option>
            <option className="bg-sumi">OGKK Goju Ryu Karate</option>
            <option className="bg-sumi">Tai Chi &amp; Qigong</option>
          </select>
        </div>

        <div>
          <label htmlFor="t-rating" className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
            Rating
          </label>
          <select
            id="t-rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi outline-none focus:border-hanko-bright transition-colors"
          >
            <option className="bg-sumi" value="5">★★★★★ (5)</option>
            <option className="bg-sumi" value="4">★★★★ (4)</option>
            <option className="bg-sumi" value="3">★★★ (3)</option>
            <option className="bg-sumi" value="2">★★ (2)</option>
            <option className="bg-sumi" value="1">★ (1)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="t-review" className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
          Your review
        </label>
        <textarea
          id="t-review"
          required
          rows={5}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi placeholder:text-washi-dim/50 focus:border-hanko-bright outline-none transition-colors resize-none"
          placeholder="Tell us about your (or your child's) experience training with us."
        />
      </div>

      <button
        type="submit"
        className="mt-2 bg-hanko-bright text-sumi font-body font-medium px-7 py-4 uppercase tracking-wide text-sm hover:bg-brass-bright transition-colors self-start"
      >
        Submit Review
      </button>
      <p className="font-body text-washi-dim/60 text-xs -mt-2">
        Submitting opens your email app so we can review and add it to the site.
      </p>
    </form>
  );
}
