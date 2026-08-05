import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="bg-sumi border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-5">
            New Students Welcome — Ages 5 and Up
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-washi text-balance max-w-3xl mx-auto">
            Come try a free class. See what fifty years built.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="bg-hanko-bright text-sumi font-body font-medium px-8 py-4 uppercase tracking-wide text-sm hover:bg-brass-bright transition-colors"
            >
              Book Your Free Trial
            </Link>
            <Link
              href="/schedule"
              className="border border-white/25 text-washi font-body px-8 py-4 uppercase tracking-wide text-sm hover:border-brass-bright hover:text-brass-bright transition-colors"
            >
              View Class Schedule
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
