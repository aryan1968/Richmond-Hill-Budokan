# Richmond Hill Budokan — Website Rebuild

A from-scratch Next.js rebuild of rhjiujitsu.com, built to be more visually
striking and conversion-focused for attracting new students. Content
(history, curriculum, schedule, contact info) was pulled from the current
live site; the design, copy structure, and code are new.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (custom design tokens in `src/app/globals.css`)
- Framer Motion for scroll reveals and the animated belt-progression bar
- Fonts self-hosted via `@fontsource` (Shippori Mincho / Work Sans / Space Mono)
  — no runtime dependency on Google Fonts

## Pages

- `/` — Home
- `/programs` — Kitsune Ryu Jiu-Jitsu, OGKK Goju Ryu Karate, Tai Chi & Qigong
- `/legacy` — O-Sensei Steve Reynolds history + competition history
- `/testimonials` — student/parent reviews + a form for new submissions
- `/instructors` — instructor team
- `/schedule` — class days/hours and age tracks
- `/contact` — inquiry form + location/hours/map

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Deploying

This is a standard Next.js app — it deploys directly to Vercel (recommended,
zero config: `vercel deploy` or connect the repo in the Vercel dashboard),
or any Node host that runs `npm run build && npm run start`.

## Things to finish before this replaces the live site

1. **Real photography.** The current build is intentionally
   typography/color-led with no photos — I didn't have access to the
   dojo's actual photo library from this environment. Drop images into
   `public/images/` and I can wire them into the Hero, Programs, and
   Instructors sections (action shots of classes/kata, the physical dojo
   space, and instructor headshots would have the biggest impact).
2. **Contact form & testimonial submissions.** `src/components/ContactForm.tsx`
   and `src/components/TestimonialForm.tsx` both currently open the visitor's
   email client via a `mailto:` link — zero backend needed, but submissions
   aren't tracked or auto-published. New testimonials land in your inbox and
   have to be added by hand to `src/lib/testimonials.ts`. A real form handler
   (Formspree, Resend, etc.) plus a small backend would let reviews post
   automatically. Say the word and I'll wire one in.
3. **Real testimonials.** `src/lib/testimonials.ts` currently holds three
   clearly-labeled placeholder reviews. Swap in real student/parent quotes
   whenever you have them (or forward me what comes in through the form).
3. **Instructor bios.** `/instructors` currently lists the three sensei
   named on the old site with no bios (I didn't want to invent
   credentials). Send me real bios/photos and I'll build it out properly.
4. **Domain/DNS.** Once you're ready, point rhjiujitsu.com at the new
   deployment — happy to walk through that when you get there.
