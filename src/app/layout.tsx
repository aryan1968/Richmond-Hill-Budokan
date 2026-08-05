import type { Metadata } from "next";
import "@fontsource/shippori-mincho/400.css";
import "@fontsource/shippori-mincho/500.css";
import "@fontsource/shippori-mincho/600.css";
import "@fontsource/shippori-mincho/700.css";
import "@fontsource/shippori-mincho/800.css";
import "@fontsource/work-sans/300.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Richmond Hill Budokan | Traditional Japanese Jiu-Jitsu, Karate & Wellness",
  description:
    "Over 50 years training Richmond Hill in traditional Kitsune Ryu Jiu-Jitsu, OGKK Goju Ryu Karate, and Tai Chi & Qigong. Free trial classes for ages 5 and up.",
  metadataBase: new URL("https://www.rhjiujitsu.com"),
  openGraph: {
    title: "Richmond Hill Budokan | Honour Above All",
    description:
      "Traditional Japanese Jiu-Jitsu, OGKK Goju Ryu Karate, and Tai Chi & Qigong in Richmond Hill, Ontario since 1973.",
    url: "https://www.rhjiujitsu.com",
    siteName: "Richmond Hill Budokan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
