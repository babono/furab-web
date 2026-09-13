import Image from "next/image";

/** A screenshot in a phone-shaped bezel, so captures read as a device. */
export function Phone({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[2.2rem] border-[6px] border-ink/85 bg-ink/85 shadow-2xl shadow-ink/25 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1320}
        height={2868}
        priority={priority}
        sizes="(max-width: 768px) 70vw, 300px"
        className="rounded-[1.8rem] w-full h-auto"
      />
    </div>
  );
}
