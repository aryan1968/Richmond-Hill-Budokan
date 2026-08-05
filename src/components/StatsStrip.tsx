import Reveal from "./Reveal";

const STATS = [
  { value: "50+", label: "Years in Richmond Hill" },
  { value: "11×", label: "World Champion Titles (WKC / WKA / NASKA)" },
  { value: "5–76", label: "Age Range of Active Students" },
  { value: "10", label: "Original Katas, White to Black Belt" },
];

export default function StatsStrip() {
  return (
    <section className="bg-hanko border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-4xl sm:text-5xl text-sumi">
              {s.value}
            </p>
            <p className="font-body text-sumi/80 text-sm mt-2 leading-snug">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
