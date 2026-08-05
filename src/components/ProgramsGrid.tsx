import Link from "next/link";
import Reveal from "./Reveal";
import { PROGRAMS } from "@/lib/programs";

export default function ProgramsGrid() {
  return (
    <section className="bg-indigo-deep border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <Reveal className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-4">
            Programs
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-washi text-balance">
            Three disciplines, one dojo.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link
                href={`/programs#${p.slug}`}
                className="group block bg-indigo-deep h-full p-8 lg:p-10 hover:bg-indigo transition-colors"
              >
                <span className="font-display text-6xl text-white/10 group-hover:text-hanko-bright/40 transition-colors">
                  {p.kanji}
                </span>
                <h3 className="font-display text-2xl text-washi mt-6 mb-2">
                  {p.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wide text-brass-bright mb-4">
                  {p.tagline}
                </p>
                <p className="font-body text-washi-dim leading-relaxed text-sm">
                  {p.description}
                </p>
                <span className="inline-block mt-6 text-sm font-body text-hanko-bright group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
