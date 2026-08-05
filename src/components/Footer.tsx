import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import BeltBar from "./BeltBar";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-sumi-deep border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-washi mb-3">
            Richmond Hill <span className="text-hanko-bright">Budokan</span>
          </p>
          <p className="text-washi-dim font-body max-w-sm leading-relaxed">
            Traditional Japanese Jujutsu, OGKK Goju Ryu Karate, and Tai Chi &amp;
            Qigong — training Richmond Hill in martial arts and life since 1973.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/rhbudokan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center border border-white/15 text-washi-dim hover:border-hanko-bright hover:text-hanko-bright transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/RichmondHillBudokan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center border border-white/15 text-washi-dim hover:border-hanko-bright hover:text-hanko-bright transition-colors"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest text-brass-bright mb-4">
            Visit
          </p>
          <div className="flex gap-3 text-washi-dim mb-3">
            <MapPin size={18} className="shrink-0 mt-0.5" />
            <p>
              10 Newkirk Road, Unit 7
              <br />
              Richmond Hill, ON L4C 3S5
            </p>
          </div>
          <p className="text-washi-dim text-sm mt-4">Monday – Friday</p>
          <p className="text-washi">5:30 PM – 9:00 PM</p>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest text-brass-bright mb-4">
            Contact
          </p>
          <a
            href="mailto:rhbudokan@gmail.com"
            className="flex items-center gap-3 text-washi-dim hover:text-washi transition-colors mb-3"
          >
            <Mail size={18} />
            rhbudokan@gmail.com
          </a>
          <a
            href="tel:9057700457"
            className="flex items-center gap-3 text-washi-dim hover:text-washi transition-colors"
          >
            <Phone size={18} />
            905-770-0457
          </a>
          <Link
            href="/contact"
            className="inline-block mt-6 text-sm uppercase tracking-wide text-hanko-bright hover:text-brass-bright transition-colors"
          >
            Book a Free Trial →
          </Link>
        </div>
      </div>
      <BeltBar />
      <div className="text-center py-5 text-xs text-washi-dim/60 font-body">
        © {new Date().getFullYear()} Richmond Hill Budokan. Honour Above All.
      </div>
    </footer>
  );
}
