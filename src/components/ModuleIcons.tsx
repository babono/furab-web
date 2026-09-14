/**
 * One icon per tracker, drawn to echo the SF Symbols the app uses for the same
 * module — so a card here reads like the row it maps to in the product.
 *
 * Our own paths rather than an icon library: nine icons do not justify a
 * webfont, and this keeps the set consistent with the THR pillar icons.
 */
import type { JSX } from "react";

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

type P = { className?: string };

/** waterbottle.fill */
export const MilkIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <path d="M10.4 2.4h3.2" />
    <rect x="9.3" y="4.3" width="5.4" height="2.2" rx="0.8" />
    <rect x="8.1" y="6.5" width="7.8" height="15.1" rx="2.6" />
    <path d="M10.3 11.6h3.4M10.3 14.4h2.2" />
  </svg>
);

/** toilet.fill */
export const PooIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <rect x="6.6" y="2.6" width="5" height="5.2" rx="1" />
    <path d="M5.2 9.4h13v1.2a5.6 5.6 0 0 1-5.6 5.6h-1.8a5.6 5.6 0 0 1-5.6-5.6z" />
    <path d="M9.4 16.2 8.4 21h7.2l-1-4.8" />
  </svg>
);

/** pills.fill */
export const MedicationIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <path d="M13.8 3.6a3.6 3.6 0 0 1 5.1 5.1l-4.6 4.6a3.6 3.6 0 0 1-5.1-5.1z" />
    <path d="M11.2 6.2 16.3 11.3" />
    <circle cx="7.4" cy="16.8" r="4.3" />
    <path d="M4.4 13.8 10.4 19.8" />
  </svg>
);

/** moon.zzz.fill */
export const SleepIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <path d="M20.2 14.4A8.4 8.4 0 0 1 9.6 3.8 8.4 8.4 0 1 0 20.2 14.4z" />
    <path d="M14.6 2.6h3.4l-3.4 3.6h3.4" />
  </svg>
);

/** arrow.2.squarepath — a change, twice round */
export const DiaperIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <path d="M19.2 9.6A7.6 7.6 0 0 0 5.6 6.1" />
    <path d="M4.8 2.6v3.8h3.8" />
    <path d="M4.8 14.4a7.6 7.6 0 0 0 13.6 3.5" />
    <path d="M19.2 21.4v-3.8h-3.8" />
  </svg>
);

/** shower.fill */
export const BathIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <path d="M5.6 9.6a6.4 6.4 0 0 1 12.8 0z" />
    <path d="M12 9.6V4.2h4" />
    <path d="M8 13.2v1.8M12 13.6v2.4M16 13.2v1.8M9.8 18.2v1.6M14.2 18.2v1.6" />
  </svg>
);

/** figure.mind.and.body */
export const TummyIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <circle cx="12" cy="4.6" r="2.1" />
    <path d="M12 8.6v4.2" />
    <path d="M6.2 11.4c2.1 1.7 3.9 2.5 5.8 2.5s3.7-.8 5.8-2.5" />
    <path d="M7.8 19.4c1.5-2.2 2.9-3.3 4.2-3.3s2.7 1.1 4.2 3.3" />
    <path d="M7.8 19.4h8.4" />
  </svg>
);

/** heart.circle.fill */
export const MomFeedingIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <path d="M12 20.8s-7.7-4.7-7.7-10a4.8 4.8 0 0 1 7.7-2.8 4.8 4.8 0 0 1 7.7 2.8c0 5.3-7.7 10-7.7 10z" />
  </svg>
);

/** fork.knife */
export const MomMealIcon = ({ className }: P) => (
  <svg {...svg} className={className}>
    <path d="M6.4 2.8v4a2.6 2.6 0 0 0 5.2 0v-4" />
    <path d="M9 9.4V21.2M7.9 2.8v4M10.1 2.8v4" />
    <path d="M16.8 2.8c2 2.1 2 6.5 0 8.6V21.2" />
  </svg>
);

export const moduleIcons: Record<string, (p: P) => JSX.Element> = {
  Milk: MilkIcon,
  Poo: PooIcon,
  Medications: MedicationIcon,
  Sleep: SleepIcon,
  Diaper: DiaperIcon,
  Bath: BathIcon,
  "Tummy Time": TummyIcon,
  "Mom Feeding": MomFeedingIcon,
  "Mom Meals": MomMealIcon,
};
