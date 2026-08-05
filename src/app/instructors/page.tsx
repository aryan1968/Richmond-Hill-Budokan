import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Instructors | Richmond Hill Budokan",
  description:
    "Meet the instructor team at the Richmond Hill Budokan — National and International Champions with over 45 years of championship excellence.",
};

const INSTRUCTORS = [
  {
    name: "Sensei John",
    role: "Kitsune Ryu Jiu-Jitsu",
  },
  {
    name: "Sensei Doug Sr.",
    role: "Kitsune Ryu Jiu-Jitsu",
  },
  {
    name: "Sensei Doug",
    role: "Kitsune Ryu Jiu-Jitsu",
  },
];

export default function InstructorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Instructors"
        title="Taught by champions."
        description="Our instructor team includes National Champions, World Champions, and International Teachers — for over 45 years, the Richmond Hill Budokan has shown excellence on the championship circuit."
        kanji="師"
      />

      <section className="bg-sumi">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <Reveal className="max-w-3xl mb-16">
            <p className="font-body text-washi-dim leading-relaxed text-lg">
              The Budokan has an enhanced team of instructors and teachers.
              Our staff includes National and International Champions,
              specialized instructors and practitioners, and a wealth of
              knowledge to be accessed from each one of them — passed down
              directly from O-Sensei Steve Reynolds&apos; own curriculum.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-px bg-white/10">
            {INSTRUCTORS.map((instr) => (
              <Reveal key={instr.name}>
                <div className="bg-sumi p-8 h-full">
                  <div className="w-14 h-14 border border-brass-bright/40 flex items-center justify-center font-display text-2xl text-brass-bright mb-6">
                    {instr.name.charAt(0)}
                  </div>
                  <p className="font-display text-xl text-washi mb-1">
                    {instr.name}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wide text-washi-dim">
                    {instr.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
