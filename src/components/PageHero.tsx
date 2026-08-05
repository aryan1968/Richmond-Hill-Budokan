import BeltBar from "./BeltBar";

export default function PageHero({
  eyebrow,
  title,
  description,
  kanji,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  kanji?: string;
}) {
  return (
    <section className="relative bg-sumi pt-40 pb-20 overflow-hidden border-b border-white/5">
      {kanji && (
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-10 -top-10 font-display text-[28vw] leading-none text-white/[0.035]"
        >
          {kanji}
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-5">
          {eyebrow}
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-washi text-balance leading-[1.02] max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="font-body text-washi-dim text-lg max-w-2xl mt-6 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <BeltBar className="absolute bottom-0 left-0" />
    </section>
  );
}
