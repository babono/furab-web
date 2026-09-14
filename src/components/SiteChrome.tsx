import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="FURAB — home">
          {/* The mark is white artwork on transparency; unoptimized because
              Next's image optimizer refuses SVG without dangerouslyAllowSVG. */}
          <Image
            src="/brand/logo-white.svg"
            alt=""
            width={28}
            height={28}
            unoptimized
            priority
            className="h-6 w-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.28)]"
          />
          <Image
            src="/brand/logo-furab-wordmark.png"
            alt="FURAB"
            width={777}
            height={239}
            priority
            className="h-5 w-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.28)]"
          />
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/privacy" className="text-ink/70 transition hover:text-ink">Privacy</Link>
          <Link href="/contact" className="text-ink/70 transition hover:text-ink">Support</Link>
        </div>
      </nav>
    </header>
  );
}

const team = ["babono", "grace", "nathan", "adi", "farhan", "ryan"];

/** Apple's mark, drawn inline so it renders off Apple platforms too — the
 *    glyph is a private-use character and shows as a box elsewhere. */
function AppleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-surface/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/brand/appicon.png" alt="" width={40} height={40} className="rounded-xl" />
              <span className="text-sm font-medium text-ink">FURAB — for your baby</span>
            </Link>

            <p className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted">
              Built at
              <AppleMark className="h-3.5 w-3.5 text-ink" />
              <span className="font-medium text-ink">Apple Developer Academy Bali</span>
            </p>

            <p className="mt-2 text-sm text-muted">
              Made by{" "}
              {team.map((name, i) => (
                <span key={name}>
                  <span className="font-medium text-ink/80">{name}</span>
                  {i < team.length - 1 && <span className="text-faint"> · </span>}
                </span>
              ))}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-muted transition hover:text-ink">Privacy</Link>
            <Link href="/contact" className="text-muted transition hover:text-ink">Support</Link>
          </div>
        </div>

        <p className="mt-10 border-t border-black/5 pt-6 text-sm text-faint">
          © {new Date().getFullYear()} FURAB. Made for tired parents.
        </p>
      </div>
    </footer>
  );
}

/** Shared shell for the text pages, so Privacy and Support match. */
export function Prose({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="relative isolate overflow-hidden">
        <div className="mesh" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 pt-32 pb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {updated && <p className="mt-4 text-sm text-ink/60">Last updated {updated}</p>}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div
          className="space-y-8 leading-relaxed text-ink/80
            [&_a]:font-medium [&_a]:text-brand-dark [&_a]:underline [&_a]:underline-offset-4
            [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink
            [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink
            [&_li]:pl-1 [&_p+p]:mt-4
            [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
        >
          {children}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
