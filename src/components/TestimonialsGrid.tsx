import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-brass-bright" : "text-white/15"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="bg-sumi">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="bg-sumi h-full p-8 lg:p-10 flex flex-col">
                <Stars rating={t.rating} />
                <p className="font-body text-washi-dim leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-display text-lg text-washi">{t.name}</p>
                  <p className="font-mono text-xs uppercase tracking-wide text-brass-bright mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
