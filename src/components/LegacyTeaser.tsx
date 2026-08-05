import Link from "next/link";
import Reveal from "./Reveal";

export default function LegacyTeaser() {
  return (
    <section className="bg-sumi border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-4">
            Our Founder
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-washi text-balance leading-tight">
            O-Sensei Steve Reynolds
          </h2>
          <p className="font-body text-washi-dim mt-2 mb-6">1948 — 2022</p>
          <Link
            href="/legacy"
            className="inline-block text-hanko-bright hover:text-brass-bright transition-colors text-sm uppercase tracking-wide"
          >
            Read the full story →
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <p className="font-body text-washi-dim leading-relaxed text-lg">
            A lifelong martial artist who began studying Kung Fu as a boy in
            Newfoundland, O-Sensei Reynolds trained across the Canadian
            military and NATO postings in West Germany before returning home
            to study under Prof. Ronald W. Forrester of the Canadian
            Jiu-Jitsu Association — building relationships with masters like
            Prof. Wally Jay and Hanshi Richard Kim along the way.
          </p>
          <p className="font-body text-washi-dim leading-relaxed text-lg mt-4">
            In October 1973, he opened his own dojo in Richmond Hill. Over
            fifty years later, it&apos;s still teaching his curriculum,
            his katas, and his motto:{" "}
            <span className="text-washi">Honour Above All.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
