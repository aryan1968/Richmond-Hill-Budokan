import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Class Schedule | Richmond Hill Budokan",
  description:
    "Classes run Monday to Friday, 5:30–9:00 PM, for students ages 5 and up. Free trial classes available — email to book.",
};

const TRACKS = [
  {
    age: "Ages 5+",
    name: "Youth & Family",
    text: "Our entry program, where most students begin — building fundamentals, discipline, and confidence from the very first class.",
  },
  {
    age: "Ages 12+",
    name: "Young Adults",
    text: "Students move into a more technical curriculum, building toward the Kitsune Ryu kata series and deeper self-defense training.",
  },
  {
    age: "Ages 14–76",
    name: "Adult Program",
    text: "From new practitioners in their teens to our vigorous seniors, the adult program is where lifelong practice happens.",
  },
];

export default function SchedulePage() {
  return (
    <main>
      <PageHero
        eyebrow="Class Schedule"
        title="New students welcome. Ages 5 and up."
        description="We offer a comprehensive Traditional Japanese Jujutsu program, an OGKK Karate class, and Tai Chi & Qigong sessions — try any of our classes for free."
        kanji="時"
      />

      <section className="bg-sumi">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-t border-b border-white/10 py-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
                Days
              </p>
              <p className="font-display text-2xl text-washi">Monday – Friday</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
                Hours
              </p>
              <p className="font-display text-2xl text-washi">5:30 – 9:00 PM</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
                Karate
              </p>
              <p className="font-display text-2xl text-washi">Monday Evenings</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">
                Location
              </p>
              <p className="font-display text-2xl text-washi">10 Newkirk Rd, Unit 7</p>
            </div>
          </Reveal>

          <Reveal className="mb-14">
            <h2 className="font-display text-3xl sm:text-4xl text-washi mb-3">
              Find your track.
            </h2>
            <p className="font-body text-washi-dim max-w-2xl leading-relaxed">
              Whether you&apos;re starting your martial arts journey or
              continuing on the path of training, there&apos;s a program
              built for your age and experience.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 mb-20">
            {TRACKS.map((t) => (
              <Reveal key={t.name}>
                <div className="bg-sumi p-8 h-full">
                  <p className="font-mono text-sm text-brass-bright mb-4">
                    {t.age}
                  </p>
                  <h3 className="font-display text-2xl text-washi mb-3">
                    {t.name}
                  </h3>
                  <p className="font-body text-washi-dim text-sm leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="bg-indigo-deep border border-white/10 p-10 lg:p-14 text-center">
            <p className="font-display text-2xl sm:text-3xl text-washi mb-4 text-balance">
              Email us to book your free trial class.
            </p>
            <a
              href="mailto:rhbudokan@gmail.com"
              className="inline-block font-mono text-lg sm:text-xl text-hanko-bright hover:text-brass-bright transition-colors"
            >
              rhbudokan@gmail.com
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
