import { BELTS } from "@/lib/belts";

export default function BeltBar({ className = "" }: { className?: string }) {
  return (
    <div className={`belt-bar ${className}`} aria-hidden="true">
      {BELTS.map((belt) => (
        <span key={belt.name} style={{ backgroundColor: belt.hex }} />
      ))}
    </div>
  );
}
