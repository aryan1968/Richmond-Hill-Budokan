"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BeltBar from "./BeltBar";

const LINKS = [
  { href: "/programs", label: "Programs" },
  { href: "/legacy", label: "Legacy" },
  { href: "/schedule", label: "Schedule" },
  { href: "/instructors", label: "Instructors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled || open ? "bg-sumi/95 backdrop-blur border-b border-white/10" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
          <Link
            href="/"
            className="font-display text-xl tracking-wide text-washi flex items-baseline gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="text-hanko-bright">RH</span>
            <span>Budokan</span>
          </Link>

          <ul className="hidden md:flex items-center gap-9 font-body text-sm tracking-wide uppercase text-washi-dim">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-brass-bright transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center border border-hanko-bright text-washi px-5 py-2.5 text-sm uppercase tracking-wide hover:bg-hanko-bright hover:text-sumi transition-colors font-body"
          >
            Free Trial Class
          </Link>

          <button
            className="md:hidden text-washi"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden bg-sumi border-b border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-1 font-body text-base uppercase tracking-wide text-washi-dim">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-3 border-b border-white/5 hover:text-brass-bright"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block mt-4 text-center border border-hanko-bright text-washi px-5 py-3 uppercase tracking-wide"
                onClick={() => setOpen(false)}
              >
                Free Trial Class
              </Link>
            </li>
          </ul>
        </div>
      )}
      <BeltBar />
    </header>
  );
}
