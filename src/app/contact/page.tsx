import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Richmond Hill Budokan",
  description:
    "Visit the Richmond Hill Budokan at 10 Newkirk Road, Unit 7, Richmond Hill, ON. Email rhbudokan@gmail.com to book a free trial class.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Come train with us."
        description="Email to book a free trial class, or stop by during class hours to meet an instructor and see the dojo for yourself."
        kanji="門"
      />

      <section className="bg-sumi">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-display text-2xl text-washi mb-8">
              Send an inquiry
            </h2>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl text-washi mb-8">
              Find the dojo
            </h2>

            <div className="flex flex-col gap-7 mb-10">
              <div className="flex gap-4">
                <MapPin className="text-brass-bright shrink-0" size={22} />
                <div>
                  <p className="font-body text-washi">
                    10 Newkirk Road, Unit 7
                  </p>
                  <p className="font-body text-washi-dim">
                    Richmond Hill, ON L4C 3S5
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-brass-bright shrink-0" size={22} />
                <div>
                  <p className="font-body text-washi">Monday – Friday</p>
                  <p className="font-body text-washi-dim">5:30 PM – 9:00 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-brass-bright shrink-0" size={22} />
                <a
                  href="mailto:rhbudokan@gmail.com"
                  className="font-body text-washi-dim hover:text-washi transition-colors"
                >
                  rhbudokan@gmail.com
                </a>
              </div>
              <div className="flex gap-4">
                <Phone className="text-brass-bright shrink-0" size={22} />
                <a
                  href="tel:9057700457"
                  className="font-body text-washi-dim hover:text-washi transition-colors"
                >
                  905-770-0457
                </a>
              </div>
            </div>

            <div className="border border-white/10 aspect-[4/3] w-full overflow-hidden">
              <iframe
                title="Richmond Hill Budokan location map"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
                loading="lazy"
                src="https://www.google.com/maps?q=10+Newkirk+Road+Unit+7,+Richmond+Hill,+ON+L4C+3S5&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
