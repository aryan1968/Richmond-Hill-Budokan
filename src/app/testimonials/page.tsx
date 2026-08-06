import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import TestimonialForm from "@/components/TestimonialForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Testimonials | Richmond Hill Budokan",
  description:
    "Hear from students and parents training at the Richmond Hill Budokan — and share your own experience.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Testimonials"
        title="Hear from our students."
        description="Real experiences from students and parents training in Kitsune Ryu Jiu-Jitsu, OGKK Goju Ryu Karate, and Tai Chi & Qigong at the Richmond Hill Budokan."
        kanji="声"
      />

      <TestimonialsGrid />

      <section className="bg-indigo-deep border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
          <Reveal className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-4">
              Share Your Experience
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-washi text-balance">
              Been training with us? We&apos;d love to hear from you.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialForm />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
