"use client";

import { motion } from "framer-motion";
import { BELTS } from "@/lib/belts";
import Reveal from "./Reveal";

export default function BeltPath() {
  return (
    <section className="bg-indigo-deep border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-4">
            The Path
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-washi text-balance">
            Ten katas. White belt to black.
          </h2>
          <p className="font-body text-washi-dim mt-5 leading-relaxed">
            Kitsune Ryu Jiu-Jitsu is built on original kata developed by
            O-Sensei Reynolds himself — ten one-man combat sequences carrying
            a student from their first class through first-degree black belt,
            with a second set reserved for black belts continuing their
            development.
          </p>
        </Reveal>

        <div className="flex flex-col gap-3">
          {BELTS.map((belt, i) => (
            <motion.div
              key={belt.name}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="flex items-center gap-4 sm:gap-6"
            >
              <span className="font-mono text-xs text-washi-dim/50 w-6 text-right shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="h-9 sm:h-11 flex-1 flex items-center px-4 sm:px-5"
                style={{
                  backgroundColor: belt.hex,
                  width: `${100 - i * 6}%`,
                }}
              >
                <span
                  className="font-body text-xs sm:text-sm uppercase tracking-wide font-medium"
                  style={{ color: belt.text }}
                >
                  {belt.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
