import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { TIMELINE } from "@/lib/timeline";

export const metadata: Metadata = {
  title: "Legacy | Richmond Hill Budokan",
  description:
    "The story of O-Sensei Steve Reynolds and over 50 years of Kitsune Ryu Jiu-Jitsu and competition history at the Richmond Hill Budokan.",
};

export default function LegacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Legacy"
        title="O-Sensei Steve Reynolds"
        description="1948 — 2022. For well over 50 years, a respected practitioner and instructor whose curriculum is still taught exactly as he built it."
        kanji="誠"
      />

      <section className="bg-sumi">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-24">
          <Reveal className="flex flex-col gap-6">
            {TIMELINE.map((t, i) => (
              <div
                key={t.year}
                className="grid grid-cols-[1fr_auto] sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 py-6 border-t border-white/10 first:border-t-0 first:pt-0"
              >
                <p className="font-mono text-sm uppercase tracking-wide text-brass-bright sm:pt-1">
                  {t.year}
                </p>
                <p className="font-body text-washi-dim leading-relaxed text-lg">
                  {t.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-indigo-deep border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-4">
              Competition History
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-washi text-balance">
              Honour on the mat.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8 space-y-5">
            <p className="font-body text-washi-dim leading-relaxed text-lg">
              Our dojo started competing through karate tournaments. O-Sensei
              Reynolds was part of a pioneering group of Jiu-Jitsu black
              belts sent out to local karate tournaments to investigate how
              the sparring worked, and eventually to help develop the rules
              for what has since evolved into Sport Jiu-Jitsu.
            </p>
            <p className="font-body text-washi-dim leading-relaxed text-lg">
              Because of that early participation, Jiu-Jitsu fighters were
              accepted into open-style karate tournaments in kata, weapons,
              and kumite. O-Sensei&apos;s friendships with the senior karate
              instructors of the day paved the way for what we still do —
              many of the tournaments our students attend today are a
              continuation of friendships formed in the early 1970s.
            </p>
            <p className="font-body text-washi-dim leading-relaxed text-lg">
              Over the years, the Richmond Hill Budokan has produced World
              Champions, Martial Arts Hall of Fame recipients, and students
              who&apos;ve gone on to movie and TV appearances — always in service
              of the same standard: honour in showing our craft, and honing
              our skills to keep improving.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
