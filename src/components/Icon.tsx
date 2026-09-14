/**
 * Icons drawn to echo the SF Symbols the app itself uses — list.bullet,
 * sparkles and bell.badge — without shipping SF Symbols. Apple's SF Symbols
 * licence covers use inside apps on Apple platforms, not redistribution on the
 * web, so these are our own paths in the same visual language.
 */
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** After list.bullet — the app's Log tab. */
export function TrackIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="4.5" cy="6.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="17.5" r="1.3" fill="currentColor" stroke="none" />
      <path d="M9.5 6.5h10M9.5 12h10M9.5 17.5h10" />
    </svg>
  );
}

/** After sparkles — the app's Highlights card. */
export function HighlightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13 3l1.9 4.6L19.5 9.5l-4.6 1.9L13 16l-1.9-4.6L6.5 9.5l4.6-1.9L13 3z" />
      <path d="M6 15.5l.9 2.1 2.1.9-2.1.9L6 21.5l-.9-2.1L3 18.5l2.1-.9L6 15.5z" />
    </svg>
  );
}

/** After bell.badge — the app's reminders. */
export function RemindIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M17.5 9.8a5.5 5.5 0 10-11 0c0 4.4-1.7 5.9-1.7 5.9h14.4s-1.7-1.5-1.7-5.9z" />
      <path d="M13.6 19.2a1.9 1.9 0 01-3.3 0" />
      <circle cx="18.4" cy="5.6" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
