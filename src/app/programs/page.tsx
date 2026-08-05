import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import BeltPath from "@/components/BeltPath";

export const metadata: Metadata = {
  title: "Programs | Richmond Hill Budokan",
  description:
    "Kitsune Ryu Jiu-Jitsu, OGKK Goju Ryu Karate, and Tai Chi & Qigong — traditional Japanese martial arts training for ages 5 and up in Richmond Hill.",
};

const SECTIONS = [
  {
    id: "jiu-jitsu",
    kanji: "柔",
    eyebrow: "Founded 1973",
    name: "Kitsune Ryu Jiu-Jitsu",
    bg: "bg-sumi",
    paragraphs: [
      "Kitsune Ryu Jiu-Jitsu is a modern (gendai) Jiu-Jitsu system that reflects the eclectic background of its founder, O-Sensei Steve Reynolds. It was founded in 1973 with the opening of the Richmond Hill Jiu-Jitsu Kai — now the Richmond Hill Budokan — though the name Kitsune Ryu wasn't adopted until much later.",
      "Students study from an organized, technical curriculum covering forms, weapons, and self-defense, built to develop confidence in any situation, physical or otherwise. Unique to the system are ten original katas — one-man combat sequences developed by the founder — carrying students from white belt through to first-degree black belt, with a further set reserved for black belts continuing their training.",
      "Many of these kata have since been adopted by other schools, their principles proving universal — none more than the style's signature kata, Kitsune, used by our own 11-time World Champion as his primary competitive piece at the WKC, WKA, and NASKA.",
    ],
  },
  {
    id: "karate",
    kanji: "空",
    eyebrow: "Okinawan Lineage",
    name: "OGKK Goju Ryu Karate",
    bg: "bg-indigo-deep",
    paragraphs: [
      "Our Karate program is affiliated with the Okinawa Goju Ryu Karate-do Kyokai (OGKK) through its Canadian branch and Patrick Barton Sensei. Students train in traditional Okinawan forms and instruction, with teachers graded directly by Okinawan Masters.",
      "Classes emphasize traditional kata, weapons, and the hard-soft (go-ju) principles at the heart of the style — training that complements our Jiu-Jitsu curriculum and connects students to a global lineage of practitioners.",
      "We participate in regular training sessions as part of the OGKK Canada Branch, keeping our students connected to the wider Goju Ryu community beyond Richmond Hill.",
    ],
  },
  {
    id: "wellness",
    kanji: "気",
    eyebrow: "Yang Style & White Crane",
    name: "Tai Chi & Qigong",
    bg: "bg-sumi",
    paragraphs: [
      "Our wellness classes incorporate Yang Style Tai Chi principles alongside White Crane Qigong practices — slower, internal disciplines built for longevity and optimum health rather than competition.",
      "It's a natural complement to our martial programs and a standalone practice in its own right, welcoming students who want the mental clarity and physical mobility these arts are known for, at any age or fitness level.",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Programs"
        title="Three disciplines, one standard."
        description="Traditional Japanese Jujutsu, Okinawan Karate, and internal wellness practice — every program shares the same commitment to technical depth and character."
        kanji="道"
      />

      {SECTIONS.map((s) => (
        <section key={s.id} id={s.id} className={`${s.bg} border-b border-white/5 scroll-mt-20`}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-4">
              <span className="font-display text-7xl text-white/10 block mb-4">
                {s.kanji}
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-3">
                {s.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-washi text-balance">
                {s.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-8 space-y-5">
              {s.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-washi-dim leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <BeltPath />
      <CtaBand />
    </main>
  );
}
