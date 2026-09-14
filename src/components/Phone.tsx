import Image from "next/image";

/**
 * An iPhone-shaped frame around a screenshot.
 *
 * The proportions are taken from the device the captures came from (iPhone 17
 * Pro Max, a 440 x 956pt display with a ~55pt corner radius), so the radius is
 * ~12.5% of the width rather than a fixed rem value — a fixed radius reads as
 * a rounded rectangle rather than a phone as soon as the width changes.
 */
export function Phone({
  src,
  alt,
  width = 288,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  const screenRadius = width * 0.125;
  const bezel = Math.max(3, width * 0.026);
  const buttonWidth = Math.max(2, width * 0.009);

  return (
    <div className={`relative ${className}`} style={{ width }}>
      {/* Side buttons, tucked behind the body so only their edge shows. */}
      <div
        className="absolute right-0 rounded-r bg-zinc-700"
        style={{ width: buttonWidth, top: "22%", height: "10%", transform: `translateX(${buttonWidth}px)` }}
        aria-hidden
      />
      <div
        className="absolute left-0 rounded-l bg-zinc-700"
        style={{ width: buttonWidth, top: "16%", height: "5%", transform: `translateX(-${buttonWidth}px)` }}
        aria-hidden
      />
      <div
        className="absolute left-0 rounded-l bg-zinc-700"
        style={{ width: buttonWidth, top: "24%", height: "8%", transform: `translateX(-${buttonWidth}px)` }}
        aria-hidden
      />

      {/* Titanium band: a gradient border rather than a flat slab. */}
      <div
        className="relative bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-700 shadow-2xl shadow-black/30"
        style={{ borderRadius: screenRadius + bezel, padding: bezel }}
      >
        <Image
          src={src}
          alt={alt}
          width={1320}
          height={2868}
          priority={priority}
          sizes={`${Math.ceil(width)}px`}
          className="block h-auto w-full"
          style={{ borderRadius: screenRadius }}
        />
      </div>
    </div>
  );
}
