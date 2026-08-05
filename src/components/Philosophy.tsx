import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="bg-sumi border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright">
            Our Philosophy
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-snug text-washi text-balance">
            Our goal is to give students the opportunity to succeed in
            martial arts and in life — an inclusive space to learn, build
            confidence, and grow as part of a community, for students of all
            ages and abilities.
          </p>
          <p className="font-body text-washi-dim mt-6 max-w-2xl leading-relaxed">
            Students build character, resilience, and team spirit alongside
            technical skill — from their first class at age five through a
            lifetime of practice. It&apos;s the same standard O-Sensei Steve
            Reynolds set when he opened his dojo&apos;s doors in 1973, and the
            same one we hold today.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
