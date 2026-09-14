import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" aria-label="FURAB — home">
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

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 sm:flex-row sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/appicon.png" alt="" width={40} height={40} className="rounded-xl" />
          <span className="text-sm text-muted">FURAB — for your baby</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/privacy" className="text-muted transition hover:text-ink">Privacy</Link>
          <Link href="/contact" className="text-muted transition hover:text-ink">Support</Link>
        </div>
        <p className="text-sm text-faint">
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
