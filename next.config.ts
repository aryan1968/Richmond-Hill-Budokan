import type { NextConfig } from "next";

// Deployed on Vercel — no static export needed. The /admin section requires
// real server-side rendering (auth checks, live Google Sheets data), which
// GitHub Pages' static hosting can't do. See docs/PAYMENT-TRACKER-SETUP.md.
const nextConfig: NextConfig = {};

export default nextConfig;
