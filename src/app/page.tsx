import Image from "next/image";
import { Phone } from "@/components/Phone";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { HighlightIcon, RemindIcon, TrackIcon } from "@/components/Icon";
import { moduleIcons } from "@/components/ModuleIcons";

/** Slices stacked through the coin's depth. Enough of them that the stack reads
 *  as solid when it turns edge-on; too few and you see separate discs. */
const COIN_SLICES = 17;
/** Total depth in px, front face to back face. */
const COIN_DEPTH = 74;

const pillars = [
  {
    Icon: TrackIcon,
    title: "Track",
    body:
      "Every feed, nappy, nap, bath, dose and tummy-time session — and mom's own pumping and meals, so a reaction can be traced back to what she ate.",
    points: ["One-tap quick add", "How much, how long, which method", "Photos on nappies and meals"],
  },
  {
    Icon: HighlightIcon,
    title: "Highlight",
    body:
      "Your logs become plain-language highlights — averages, trends, and what changed today — written on your device by Apple Intelligence. Nothing is uploaded.",
    points: ["Day, weekly and monthly charts", "Written on-device", "Works offline"],
  },
  {
    Icon: RemindIcon,
    title: "Remind",
    body:
      "Medication schedules that know what's already been given, and feed reminders that follow the last one. Mark a dose taken or skipped in a tap.",
    points: ["Recurring daily schedules", "As-needed doses", "Nothing double-counted"],
  },
];

const modules = [
  { name: "Milk", blurb: "Amount, source, method, duration" },
  { name: "Poo", blurb: "Amount, colour, texture, photo" },
  { name: "Medications", blurb: "Schedules and as-needed doses" },
  { name: "Sleep", blurb: "Asleep, awake, and for how long" },
  { name: "Diaper", blurb: "Every change and what was in it" },
  { name: "Bath", blurb: "Bath times" },
  { name: "Tummy Time", blurb: "Sessions and their length" },
  { name: "Mom Feeding", blurb: "Nursing and pumping amounts" },
  { name: "Mom Meals", blurb: "What mom ate, for allergy hunting" },
];

const shots = [
  { src: "/screenshots/01-home.png", alt: "The FURAB home screen", caption: "Today at a glance" },
  { src: "/screenshots/03-milk.png", alt: "Milk charts and highlights", caption: "Charts and highlights" },
  { src: "/screenshots/04-medications.png", alt: "Medication schedule", caption: "Doses, on schedule" },
  { src: "/screenshots/02-log.png", alt: "The full log feed", caption: "Every entry, one feed" },
  { src: "/screenshots/05-addmilk.png", alt: "Adding a milk entry", caption: "Logging in seconds" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SiteHeader />

      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mesh" aria-hidden />
        <div className="coin-stage" aria-hidden>
          <div className="coin">
            {Array.from({ length: COIN_SLICES }).map((_, i) => {
              const t = i / (COIN_SLICES - 1);           // 0 → 1 across the depth
              const z = (t - 0.5) * COIN_DEPTH;
              const isFace = i === 0 || i === COIN_SLICES - 1;
              return (
                <span
                  key={i}
                  className={`coin-face${isFace ? "" : " coin-face--inner"}`}
                  style={{ "--z": `${z.toFixed(2)}px` } as React.CSSProperties}
                />
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Track, Highlight, Remind.
              </p>
              <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink/70 md:mx-0">
                The calm way to keep up with a newborn. Log it in a tap, and let
                your phone do the remembering.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <span className="inline-flex h-13 items-center rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30">
                  Coming to the App Store
                </span>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-full bg-white/70 px-7 py-3.5 text-base font-semibold text-ink backdrop-blur transition hover:bg-white"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-5 text-sm text-ink/55">
                iPhone · iOS 18 or later · Free
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Phone
                src="/screenshots/01-home.png"
                alt="FURAB home screen showing today's milk, nappies and medications"
                width={288}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Pillars */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          THR
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Three things, done properly.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                <p.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              <ul className="mt-6 space-y-2.5">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink/75">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- Screenshots */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built to be used at 3am.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-white/60">
            Big targets, no menus to dig through, and a home screen that answers
            &ldquo;how is today going?&rdquo; before you have finished waking up.
          </p>

          <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
            {shots.map((s) => (
              <figure key={s.src} className="shrink-0 snap-center">
                <Phone src={s.src} alt={s.alt} width={208} />
                <figcaption className="mt-4 text-center text-sm text-white/60">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Modules */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Only the trackers you want.
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Start with milk, nappies and medications. Add the rest when you need
          them — and take them off your home screen when you don&apos;t.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => {
            const Icon = moduleIcons[m.name];
            return (
              <div
                key={m.name}
                className="flex items-start gap-4 rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-black/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted">{m.blurb}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------- Privacy */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14">
          <div className="mesh" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your baby&apos;s data stays yours.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Highlights are written by Apple Intelligence on your own iPhone —
              no server sees a single feed. Logs sync through your private
              iCloud, so a second parent can share them without anyone else
              being able to.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {["No password to create", "No analytics, no ads", "Works offline"].map((t) => (
                <li
                  key={t}
                  className="rounded-xl bg-white/70 px-4 py-3 text-sm font-medium backdrop-blur"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
