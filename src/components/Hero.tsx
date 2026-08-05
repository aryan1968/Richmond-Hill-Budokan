"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BeltBar from "./BeltBar";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-sumi pt-20">
      {/* ambient kanji watermark — 武 (martial / bu) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-16 top-1/2 -translate-y-1/2 font-display text-[46vw] leading-none text-white/[0.035]"
      >
        武
      </div>

      {/* faint tatami grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ede6d6 1px, transparent 1px), linear-gradient(to bottom, #ede6d6 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pb-20 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-brass-bright mb-6"
        >
          Richmond Hill, Ontario — Est. 1973
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance text-[13vw] sm:text-7xl lg:text-8xl leading-[0.95] text-washi max-w-5xl"
        >
          Honour
          <br />
          Above <span className="text-hanko-bright">All.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-body text-washi-dim text-lg sm:text-xl max-w-xl mt-8 leading-relaxed"
        >
          For over 50 years, the Richmond Hill Budokan has trained students of
          every age in traditional Kitsune Ryu Jiu-Jitsu, OGKK Goju Ryu
          Karate, and Tai Chi &amp; Qigong — building character, resilience,
          and community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link
            href="/contact"
            className="bg-hanko-bright text-sumi font-body font-medium px-7 py-4 uppercase tracking-wide text-sm hover:bg-brass-bright transition-colors"
          >
            Start a Free Trial Class
          </Link>
          <Link
            href="/programs"
            className="border border-white/25 text-washi font-body px-7 py-4 uppercase tracking-wide text-sm hover:border-brass-bright hover:text-brass-bright transition-colors"
          >
            Explore Our Programs
          </Link>
        </motion.div>
      </div>

      <BeltBar className="relative" />
    </section>
  );
}
