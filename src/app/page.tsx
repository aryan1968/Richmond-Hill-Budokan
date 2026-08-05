import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProgramsGrid from "@/components/ProgramsGrid";
import LegacyTeaser from "@/components/LegacyTeaser";
import BeltPath from "@/components/BeltPath";
import StatsStrip from "@/components/StatsStrip";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <ProgramsGrid />
      <LegacyTeaser />
      <BeltPath />
      <StatsStrip />
      <CtaBand />
    </main>
  );
}
