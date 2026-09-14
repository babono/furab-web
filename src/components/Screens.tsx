"use client";

import { useEffect, useState } from "react";
import { Phone } from "@/components/Phone";

/** Which baby the screenshots show. An easter egg: 50/50 on every load. */
export type Variant = "girl" | "boy";

const shots = [
  { file: "01-home.png", alt: "The FURAB home screen", caption: "Today at a glance" },
  { file: "03-milk.png", alt: "Milk charts and highlights", caption: "Charts and highlights" },
  { file: "04-medications.png", alt: "Medication schedule", caption: "Doses, on schedule" },
  { file: "02-log.png", alt: "The full log feed", caption: "Every entry, one feed" },
  { file: "05-addmilk.png", alt: "Adding a milk entry", caption: "Logging in seconds" },
];

/**
 * The variant is chosen after mount, not during render: this page is
 * prerendered, so picking at render time would bake one variant into the HTML
 * and then mismatch on hydration.
 */
export function useVariant(): Variant {
  const [variant, setVariant] = useState<Variant>("girl");
  useEffect(() => {
    setVariant(Math.random() < 0.5 ? "girl" : "boy");
  }, []);
  return variant;
}

export function HeroPhone({ variant }: { variant: Variant }) {
  return (
    <Phone
      src={`/screenshots/${variant}/01-home.png`}
      alt="FURAB home screen showing today's milk, nappies and medications"
      width={288}
      priority
    />
  );
}

/**
 * A marquee rather than a scroller: the strip drifts right to left on its own,
 * full-bleed. The list is rendered twice and the track shifts by exactly half
 * its width, so the loop is seamless. Spacing is a margin on each item rather
 * than a flex `gap` — with gaps the halfway point does not line up with the
 * start of the second copy, and the loop visibly jumps.
 */
export function ScreenMarquee({ variant }: { variant: Variant }) {
  const run = [...shots, ...shots];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {run.map((s, i) => (
          <figure key={`${s.file}-${i}`} className="marquee-item">
            <Phone src={`/screenshots/${variant}/${s.file}`} alt={i < shots.length ? s.alt : ""} width={208} />
            <figcaption className="mt-4 text-center text-sm text-muted">{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
